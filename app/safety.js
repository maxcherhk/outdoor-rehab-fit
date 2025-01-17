import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { LocaleContext } from "../contexts/LocaleContext";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Safety = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);

	useEffect(() => {
		const checkSafetyResponse = async () => {
			try {
				const safetyResponse = await AsyncStorage.getItem("safetyResponse");
				if (safetyResponse === "no") {
					router.navigate("/(tabs)");
				}
			} catch (error) {
				console.error("Error checking safety response status", error);
			}
		};

		checkSafetyResponse();
	}, []);

	const handleNo = async () => {
		try {
			await AsyncStorage.setItem("safetyResponse", "no");
			router.navigate("/(tabs)");
		} catch (error) {
			console.error("Error saving safety response status", error);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Disclaimer</Text>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.text}>{i18n.t("safety")}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={handleNo}>
					<Text style={styles.buttonText}>{i18n.t("yes")}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						Alert.alert(i18n.t("warning"), i18n.t("questionnaireYes"));
					}}
				>
					<Text style={styles.buttonText}>{i18n.t("no")}</Text>
				</TouchableOpacity>
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

export default Safety;
