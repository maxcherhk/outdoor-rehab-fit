import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const buttons = [
	{ color: "#FF6347", text: "戶外設施" },
	{ color: "#4682B4", text: "風險管理" },
	{ color: "#32CD32", text: "設施位置" },
	{ color: "#FFD700", text: "大學研究" },
];

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Image source={require("@/assets/images/background.png")} style={styles.photo} />
			<View style={styles.buttonsContainer}>
				{buttons.map((button, index) => (
					<View key={index} style={styles.buttonWrapper}>
						<TouchableOpacity style={[styles.button, { backgroundColor: button.color }]}>
							{/* Icon can be placed here */}
						</TouchableOpacity>
						<Text style={styles.buttonText}>{button.text}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	photo: {
		width: screenWidth,
		height: 250,
		resizeMode: "cover",
	},
	buttonsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		marginTop: 20,
	},
	buttonWrapper: {
		alignItems: "center",
		margin: 10,
	},
	button: {
		width: 156,
		height: 156,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonText: {
		color: "#000",
		fontSize: 24,
		textAlign: "center",
		marginTop: 5,
	},
});
