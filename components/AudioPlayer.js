import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const AudioPlayer = ({ audioFile }) => {
	const [sound, setSound] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentPosition, setCurrentPosition] = useState(0);

	useEffect(() => {
		const loadAudio = async () => {
			const { sound } = await Audio.Sound.createAsync(audioFile);
			setSound(sound);

			sound.setOnPlaybackStatusUpdate((status) => {
				if (status.isLoaded) {
					setDuration(status.durationMillis || 0);
					setCurrentPosition(status.positionMillis || 0);

					if (status.didJustFinish) {
						setIsPlaying(false);
						sound.stopAsync();
					}
				}
			});
		};

		loadAudio();

		return () => {
			if (sound) {
				sound.unloadAsync();
			}
		};
	}, [audioFile]);

	useFocusEffect(
		React.useCallback(() => {
			return () => {
				if (sound) {
					sound.stopAsync();
				}
			};
		}, [sound])
	);

	const playPauseHandler = async () => {
		if (isPlaying) {
			await sound.pauseAsync();
			setIsPlaying(false);
		} else {
			await sound.playAsync();
			setIsPlaying(true);
		}
	};

	const stopHandler = async () => {
		if (sound) {
			await sound.stopAsync();
			setIsPlaying(false);
			setCurrentPosition(0);
		}
	};

	const seekHandler = async (value) => {
		if (sound) {
			const position = value * duration;
			await sound.setPositionAsync(position);
			setCurrentPosition(position);
		}
	};

	const formatTime = (milliseconds) => {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<View style={styles.container}>
			<View style={styles.timeContainer}>
				<Text>{formatTime(currentPosition)}</Text>
				<Text>{formatTime(duration)}</Text>
			</View>

			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={1}
				value={duration ? currentPosition / duration : 0}
				onValueChange={seekHandler}
				minimumTrackTintColor="#1E90FF"
				maximumTrackTintColor="#d3d3d3"
				thumbTintColor="#1E90FF"
			/>

			<View style={styles.controls}>
				<TouchableOpacity onPress={playPauseHandler}>
					<MaterialIcons name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} size={50} color="#1E90FF" />
				</TouchableOpacity>

				<TouchableOpacity onPress={stopHandler}>
					<MaterialIcons name="stop-circle" size={50} color="#1E90FF" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginBottom: 10,
	},
	slider: {
		width: "100%",
		height: 40,
		marginBottom: 20,
	},
	controls: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%",
	},
});

export default AudioPlayer;
