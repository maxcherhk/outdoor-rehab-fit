import React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const Location = () => {
	return (
		<WebView
			style={styles.container}
			source={{ uri: "https://www.lcsd.gov.hk/clpss/tc/webApp/Facility/District.do?ftid=161" }}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default Location;
