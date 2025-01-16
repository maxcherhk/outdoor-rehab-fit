import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router, useNavigation } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons"; // Make sure to install this package
import { LocaleContext } from "../../contexts/LocaleContext";

const Index = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => router.navigate(`/risk/disclaimer`)}>
				<AntDesign name="form" size={80} color="white" />
				<Text style={styles.buttonText}>{i18n.t("parq")}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					router.navigate(`/risk/safety`);
				}}
			>
				<AntDesign name="Safety" size={80} color="white" />
				<Text style={styles.buttonText}>{i18n.t("sprm")}</Text>
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
		height: "30%",
	},
	buttonText: {
		color: "white",
		marginTop: 10,
		fontSize: 22,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default Index;
