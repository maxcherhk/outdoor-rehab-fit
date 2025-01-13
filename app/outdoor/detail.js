import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useNavigation } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import YoutubePlayer from "react-native-youtube-iframe";

const Detail = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const item = useLocalSearchParams();
	const navigation = useNavigation();
	console.log(item);

	useEffect(() => {
		navigation.setOptions({ headerTitle: item.name });
	}, [navigation, item.name]);

	return (
		<ScrollView>
			<Image source={item.horizontalPic} style={styles.image} />
			<ThemedView style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("introduction")}</ThemedText>
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
			</ThemedView>
			<ThemedView style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("reminderAndTips")}</ThemedText>
				<View style={styles.gifContainer}>
					<Image source={require(`../../assets/images/gif/1a.gif`)} style={styles.gif} />
					<Image source={require(`../../assets/images/gif/1b.gif`)} style={styles.gif} />
				</View>
				{/* <YoutubePlayer height={270} play={true} videoId={item.youtubeKey} /> */}
				<Collapsible title={i18n.t("useTips")}>
					<ThemedText style={styles.text}>{item.details}</ThemedText>
				</Collapsible>
			</ThemedView>
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
	section: {
		padding: 16,
		marginBottom: 16,
	},
	image: {
		width: "100%",
		height: 250,
	},
	text: {
		fontSize: 24,
		lineHeight: 32,
		color: "#333",
	},
	gifContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	gif: {
		width: 150, // Adjust the width as needed
		height: 200, // Adjust the height as needed
		margin: 5, // Optional: Add margin to space out the GIFs
	},
});

export default Detail;
