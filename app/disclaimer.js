import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { LocaleContext } from "../contexts/LocaleContext";

const Disclaimer = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Disclaimer</Text>
			<ScrollView style={styles.scrollView}>
				<Text style={styles.text}>{i18n.t("disclaimer")}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						/* Handle Yes press */
					}}
				>
					<Text style={styles.buttonText}>Yes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						/* Handle No press */
					}}
				>
					<Text style={styles.buttonText}>No</Text>
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
		textAlign: "center",
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
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginVertical: 8,
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Disclaimer;
