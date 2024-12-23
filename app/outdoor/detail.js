import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { I18n } from "i18n-js";
import { equipmentPageTranslations } from "../../constants/Languages";
import { useNavigation } from "expo-router";

// Initialize I18n with the translations
const i18n = new I18n(equipmentPageTranslations);

const Detail = () => {
	const item = useLocalSearchParams();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ headerTitle: item.name });
	}, [navigation, item.name]);

	return (
		<ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }} headerImage={<Image source={item.pic} style={styles.reactLogo} />}>
			<Image source={item.pic} style={styles.image} />
			<Collapsible title={i18n.t("tip1")}>
				<ThemedText>{item.kinesiologyTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("tip2")}>
				<ThemedText>{item.ptTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("tip3")}>
				<ThemedText>{item.otTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("tip4")}>
				<ThemedText>{item.kinesiologyTip}</ThemedText>
			</Collapsible>
		</ParallaxScrollView>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	image: {
		width: 125,
		height: 125,
	},
});

export default Detail;
