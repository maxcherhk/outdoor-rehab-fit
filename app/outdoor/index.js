import React from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import CustomBackButton from "../../components/CustomBackButton";
import { I18n } from "i18n-js";
import { categoryTranslations } from "../../constants/Languages";

// Initialize I18n with the translations
const i18n = new I18n(categoryTranslations);

const { width: screenWidth } = Dimensions.get("window");

const buttons = [
	{ icon: require("@/assets/icons/outdoor/list.png"), text: i18n.t("all") },
	{ icon: require("@/assets/icons/outdoor/muscle.png"), text: i18n.t("muscle") },
	{ icon: require("@/assets/icons/outdoor/flexibility.png"), text: i18n.t("mobility") },
	{ icon: require("@/assets/icons/outdoor/balance.png"), text: i18n.t("balance") },
	{ icon: require("@/assets/icons/outdoor/aerobic.png"), text: i18n.t("aerobic") },
	{ icon: require("@/assets/icons/outdoor/wheelchair.png"), text: i18n.t("wheelchair") },
	{ icon: require("@/assets/icons/outdoor/multi.png"), text: i18n.t("multifunctional") },
	{ icon: require("@/assets/icons/outdoor/relax.png"), text: i18n.t("relaxation") },
];

export default function Outdoor() {
	return (
		<SafeAreaView style={styles.container}>
			<CustomBackButton />
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.buttonsContainer}>
					{buttons.map((button, index) => (
						<View key={index} style={styles.buttonWrapper}>
							<TouchableOpacity onPress={() => router.navigate({ pathname: "/outdoor/list", params: { category: button.text } })} style={styles.button}>
								<Image source={button.icon} style={styles.icon} />
							</TouchableOpacity>
							<Text style={styles.buttonText}>{button.text}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollViewContent: {
		flexGrow: 1,
		alignItems: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		paddingHorizontal: 25,
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
		fontWeight: "bold",
	},
});
