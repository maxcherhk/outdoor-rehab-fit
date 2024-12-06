import React from "react";
import { router } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const buttons = [
	{ icon: require("@/assets/icons/outdoor/list.png"), text: "Show All" },
	{ icon: require("@/assets/icons/outdoor/muscle.png"), text: "Muscle Strengthening" },
	{ icon: require("@/assets/icons/outdoor/flexibility.png"), text: "Mobility and Flexibility" },
	{ icon: require("@/assets/icons/outdoor/balance.png"), text: "Balance" },
	{ icon: require("@/assets/icons/outdoor/aerobic.png"), text: "Aerobic Activities" },
	{ icon: require("@/assets/icons/outdoor/wheelchair.png"), text: "For Wheelchair Users" },
	{ icon: require("@/assets/icons/outdoor/multi.png"), text: "Multi-functional" },
	{ icon: require("@/assets/icons/outdoor/relax.png"), text: "Muscle Relaxation" },
];

export default function Outdoor() {
	return (
		<View style={styles.container}>
			<View style={styles.buttonsContainer}>
				{buttons.map((button, index) => (
					<View key={index} style={styles.buttonWrapper}>
						<TouchableOpacity
							onPress={() => router.navigate({ pathname: "/outdoor/list", params: { category: button.text } })}
							style={styles.button}
						>
							<Image source={button.icon} style={styles.icon} />
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
		alignItems: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		width: screenWidth * 0.8, // Adjust width to fit the screen
		padding: 10,
	},
	buttonWrapper: {
		width: "45%", // Adjust width to fit two buttons per row
		alignItems: "center",
		marginVertical: 10,
	},
	button: {
		width: 110,
		height: 110,
		borderRadius: 100,
		borderWidth: 10,
		borderColor: "#EB9481",
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	icon: {
		width: 50,
		height: 50,
		resizeMode: "contain",
	},
	buttonText: {
		color: "#000",
		fontSize: 20,
		textAlign: "center",
		marginTop: 5,
	},
});
