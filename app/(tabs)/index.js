import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { router, Link } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";

const { width: screenWidth } = Dimensions.get("window");

export default function HomeScreen() {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const buttons = [
		{
			color: "#F0E4C2",
			text: i18n.t("outdoor"),
			icon: require("@/assets/icons/outdoor.png"),
			route: "outdoor",
		},
		{ color: "#E8CCB0", text: i18n.t("risk"), icon: require("@/assets/icons/risks.png"), route: "risk" },
		{ color: "#F2CCC0", text: i18n.t("location"), icon: require("@/assets/icons/map.png"), route: "location" },
		{ color: "#ECDD93", text: i18n.t("research"), icon: require("@/assets/icons/school.png"), route: "research" },
	];
	return (
		<ScrollView style={styles.container}>
			<Image source={require("@/assets/images/background.png")} style={styles.photo} />
			<View style={styles.buttonsContainer}>
				{buttons.map((button, index) => (
					<View key={index} style={styles.buttonWrapper}>
						<TouchableOpacity
							onPress={() => {
								router.push(`/${button.route}`);
							}}
							style={[styles.button, { backgroundColor: button.color }]}
						>
							<Image source={button.icon} style={styles.icon} />
						</TouchableOpacity>
						<Text style={styles.buttonText}>{button.text}</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	photo: {
		width: screenWidth,
		height: "60%",
		resizeMode: "cover",
	},
	buttonsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: 20,
		paddingHorizontal: 25, // Added padding to control spacing
	},
	buttonWrapper: {
		width: "45%",
		alignItems: "center",
		marginVertical: 10, // Reduced horizontal margin
	},
	button: {
		width: 156,
		height: 156,
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 5, // Reduced horizontal margin
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonText: {
		color: "#000",
		fontSize: 18,
		textAlign: "center",
		marginTop: 15,
		fontWeight: "bold",
	},
	icon: {
		width: 70,
		height: 70,
		resizeMode: "contain",
	},
});
