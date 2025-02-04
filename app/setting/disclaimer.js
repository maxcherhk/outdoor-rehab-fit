import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView, ActivityIndicator } from "react-native";
import { LocaleContext } from "../../contexts/LocaleContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Disclaimer = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>{i18n.t("settingDisclaimer")}</Text>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.text}>{i18n.t("disclaimer")}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				{/* <TouchableOpacity style={styles.button} onPress={handleAgree}>
					<Text style={styles.buttonText}>{i18n.t("agree")}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						router.back();
					}}
				>
					<Text style={styles.buttonText}>{i18n.t("disagree")}</Text>
				</TouchableOpacity> */}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#007BFF",
		marginBottom: 16,
		padding: 20,
		textAlign: "center",
		backgroundColor: "#f8f9fa",
	},
	scrollView: {
		flex: 1,
		marginBottom: 16,
		padding: 12,
	},
	text: {
		fontSize: 24,
		lineHeight: 32,
		color: "#333",
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 16,
	},
	button: {
		backgroundColor: "#007BFF",
		paddingVertical: 22,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginVertical: 8,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "bold",
	},
});

export default Disclaimer;
