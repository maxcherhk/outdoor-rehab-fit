// components/CustomBackButton.js
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const CustomBackButton = () => {
	return (
		<TouchableOpacity style={styles.button} onPress={() => router.back()}>
			<Ionicons name="chevron-back" size={30} color="black" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 55,
		height: 55,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default CustomBackButton;
