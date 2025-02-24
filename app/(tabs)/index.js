import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { router, Link } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import { RFValue } from "react-native-responsive-fontsize";
import WeatherComponent from "../../components/WeatherComponent";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const buttonSize = screenWidth * 0.4;
const photoHeight = screenHeight > 800 ? screenHeight * 0.35 : screenHeight * 0.25;
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

	const getGreeting = () => {
		const currentHour = new Date().getHours();
		if (currentHour < 12) {
			return i18n.t("morning");
		} else if (currentHour < 18) {
			return i18n.t("afternoon");
		} else {
			return i18n.t("evening");
		}
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={require("@/assets/images/hk.jpg")} style={styles.photo} />
				<Text style={styles.greeting}>{getGreeting()},</Text>
				<View style={styles.weatherComponentContainer}>
					<WeatherComponent style={styles.weatherComponent} i18n={i18n} />
				</View>
			</View>
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
	imageContainer: {
		position: "relative",
	},
	photo: {
		width: screenWidth,
		height: photoHeight,
		resizeMode: "cover",
		filter: "brightness(0.8)",
	},
	greeting: {
		position: "absolute",
		top: screenHeight * 0.05,
		left: screenWidth * 0.03,
		fontSize: RFValue(24),
		fontWeight: "bold",
		color: "#fff",
		padding: 10,
		borderRadius: 5,
	},
	weatherComponentContainer: {
		position: "absolute",
		bottom: screenHeight * 0.04,
		alignSelf: "center",
	},
	buttonsContainer: {
		backgroundColor: "#fff",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		marginTop: -20, // Added negative margin to overlap with the image
		paddingTop: 20, // Added padding to control spacing
		paddingHorizontal: 25, // Added padding to control spacing
		paddingBottom: 20, // Added padding to control spacing
	},
	buttonWrapper: {
		width: "45%",
		alignItems: "center",
		marginVertical: 10, // Reduced horizontal margin
	},
	button: {
		width: buttonSize,
		height: buttonSize,
		borderRadius: buttonSize / 2,
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
		fontSize: RFValue(14),
		textAlign: "center",
		marginTop: 15,
		fontWeight: "bold",
	},
	icon: {
		width: buttonSize * 0.4,
		height: buttonSize * 0.4,
		resizeMode: "contain",
	},
});
