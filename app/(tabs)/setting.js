import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons"; // Make sure to install this package
import { LocaleContext } from "../../contexts/LocaleContext";

const Setting = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={changeLanguage}>
				<FontAwesome name="language" size={42} color="white" />
				<Text style={styles.buttonText}>{i18n.t("changeLanguage")}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					router.navigate(`/info`);
				}}
			>
				<FontAwesome name="info-circle" size={42} color="white" />
				<Text style={styles.buttonText}>{i18n.t("aboutApp")}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					router.navigate(`/about`);
				}}
			>
				<FontAwesome name="users" size={42} color="white" />
				<Text style={styles.buttonText}>{i18n.t("aboutTeam")}</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<FontAwesome name="exclamation-triangle" size={42} color="white" />
				<Text style={styles.buttonText}>{i18n.t("settingDisclaimer")}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#007BFF",
		borderRadius: 10,
		padding: 20,
		margin: 10,
		width: "80%",
		height: "15%",
	},
	buttonText: {
		color: "white",
		marginTop: 10,
		fontSize: 28,
		fontWeight: "bold",
	},
});

export default Setting;
