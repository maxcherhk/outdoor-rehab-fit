import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { I18n } from "i18n-js";
import { LocaleContext } from "../../contexts/LocaleContext";

// // Initialize I18n with the translations
// const i18n = new I18n(othersTranslations);

export default function About() {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.articleContainer}>
				<Text style={styles.articleText}>{i18n.t("team")}</Text>
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
