import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useNavigation } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";

const Detail = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const item = useLocalSearchParams();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({ headerTitle: item.name });
	}, [navigation, item.name]);

	return (
		<ScrollView>
			<Image source={item.pic} style={styles.image} />
			<Collapsible title={i18n.t("kinesiologyTip")}>
				<ThemedText>{item.kinesiologyTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("ptTip")}>
				<ThemedText>{item.ptTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("otTip")}>
				<ThemedText>{item.otTip}</ThemedText>
			</Collapsible>
			<Collapsible title={i18n.t("careTip")}>
				<ThemedText>{item.kinesiologyTip}</ThemedText>
			</Collapsible>
		</ScrollView>
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
