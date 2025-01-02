import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { I18n } from "i18n-js";
import { othersTranslations } from "../../constants/Languages";

// Initialize I18n with the translations
const i18n = new I18n(othersTranslations);

export default function Info() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.articleContainer}>
				<Text style={styles.articleText}>{i18n.t("intro")}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "center",
		padding: 20,
		backgroundColor: "#ffffff",
	},
	articleText: {
		fontSize: 22,
		lineHeight: 28,
		fontWeight: "bold",
		color: "#333333",
		textAlign: "center",
	},
});
