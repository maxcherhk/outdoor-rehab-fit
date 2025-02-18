import React, { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";

const AudioPlayer = ({ audioFile }) => {
	const [sound, setSound] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [status, setStatus] = useState({});

	async function playSound() {
		if (sound) {
			await sound.playAsync();
			setIsPlaying(true);
		} else {
			const { sound } = await Audio.Sound.createAsync(audioFile);
			setSound(sound);
			setIsPlaying(true);
			await sound.playAsync();
			sound.setOnPlaybackStatusUpdate((status) => setStatus(() => status));
		}
	}

	async function pauseSound() {
		if (sound) {
			await sound.pauseAsync();
			setIsPlaying(false);
		}
	}

	async function stopSound() {
		if (sound) {
			await sound.stopAsync();
			setIsPlaying(false);
		}
	}

	const seekSound = async (value) => {
		if (sound) {
			await sound.setPositionAsync(value * 1000);
		}
	};

	useEffect(() => {
		return sound
			? () => {
					sound.unloadAsync();
			  }
			: undefined;
	}, [sound]);

	const formatTime = (millis) => {
		const minutes = Math.floor(millis / 60000);
		const seconds = ((millis % 60000) / 1000).toFixed(0);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<View style={styles.container}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={isPlaying ? pauseSound : playSound}>
					<MaterialIcons name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} size={50} color="#1E90FF" />
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={stopSound}>
					<MaterialIcons name="stop-circle" size={50} color="#1E90FF" />
				</TouchableOpacity>
			</View>
			<Slider
				style={styles.slider}
				minimumValue={0}
				maximumValue={status.durationMillis ? status.durationMillis / 1000 : 0}
				value={status.positionMillis ? status.positionMillis / 1000 : 0}
				onSlidingComplete={seekSound}
			/>
			<View style={styles.timeContainer}>
				<Text style={styles.timeText}>{status.positionMillis ? formatTime(status.positionMillis) : "0:00"}</Text>
				<Text style={styles.timeText}>{status.durationMillis ? formatTime(status.durationMillis) : "0:00"}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 20,
	},
	button: {},
	buttonText: {
		color: "#fff",
		fontSize: 16,
	},
	slider: {
		width: "100%",
		height: 40,
	},
	timeContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
	},
	timeText: {
		fontSize: 16,
		color: "#000",
	},
});

export default AudioPlayer;
