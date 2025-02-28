import React, { useContext } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { LocaleContext } from "../../../contexts/LocaleContext";

export default function Info() {
	const { i18n } = useContext(LocaleContext);
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
