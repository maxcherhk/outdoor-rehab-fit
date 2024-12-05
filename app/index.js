import React, { useEffect, useRef } from "react";
import { router } from "expo-router";
import { StyleSheet, View, Animated, TouchableOpacity, Text, ImageBackground, PixelRatio } from "react-native";

export default function HomeScreen() {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value: 0
	const scaleAnim = useRef(new Animated.Value(0.5)).current; // Initial scale value: 0.5
	useEffect(() => {
		Animated.parallel([
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(scaleAnim, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start();
	}, [fadeAnim, scaleAnim]);

	return (
		<ImageBackground source={require("@/assets/images/background.png")} resizeMethod="cover" style={styles.background}>
			<View style={styles.container}>
				<Animated.Image
					source={require("@/assets/images/logo.png")}
					style={[
						styles.logo,
						{
							opacity: fadeAnim,
							transform: [{ scale: scaleAnim }],
						},
					]}
				/>
				<TouchableOpacity style={styles.button} onPress={() => router.navigate("/(tabs)")}>
					<Text style={styles.buttonText}>Start</Text>
				</TouchableOpacity>
				<Text style={styles.appVersionText}>App version 1.0.0</Text>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 342,
		height: 98,
		resizeMode: "contain",
		marginTop: 100,
	},
	button: {
		marginTop: "auto",
		marginBottom: 10,
		paddingVertical: 20,
		paddingHorizontal: 120,
		backgroundColor: "#840B1C",
		borderRadius: 50,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 6,
		elevation: 3,
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		alignSelf: "center",
	},
	appVersionText: {
		marginBottom: 70,
	},
});
