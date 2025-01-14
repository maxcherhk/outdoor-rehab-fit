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
import AudioPlayer from "@/components/AudioPlayer";

const Detail = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const item = useLocalSearchParams();
	const navigation = useNavigation();
	useEffect(() => {
		navigation.setOptions({ headerTitle: item.name });
	}, [navigation, item.name]);
	return (
		<ScrollView>
			<Image source={item.horizontalPic} style={styles.image} />
			<View style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("introduction")}</ThemedText>
				<Collapsible title={i18n.t("tip1")}>
					<ThemedText style={styles.text}>{item.kinesiologyTip}</ThemedText>
				</Collapsible>
				<Collapsible title={i18n.t("tip2")}>
					<ThemedText style={styles.text}>{item.ptTip}</ThemedText>
				</Collapsible>
				<Collapsible title={i18n.t("tip3")}>
					<ThemedText style={styles.text}>{item.otTip}</ThemedText>
				</Collapsible>
				<Collapsible title={i18n.t("tip4")}>
					<ThemedText style={styles.text}>{item.kinesiologyTip}</ThemedText>
				</Collapsible>
			</View>
			<View style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("outdoorPractice")}</ThemedText>
				<View style={styles.gifContainer}>
					<Image source={item.gif} style={styles.gif} />
					<Image source={item.gif2} style={styles.gif} />
				</View>
				<Collapsible title={i18n.t("useTips")}>
					<ThemedText style={styles.text}>{item.details}</ThemedText>
				</Collapsible>
			</View>
			<View style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("audioTitle")}</ThemedText>
				<View style={styles.section}>
					<AudioPlayer audioFile={require("../../assets/sounds/en/1.mp3")} />
				</View>
			</View>
			<View style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("reminderAndTips")}</ThemedText>
				<YoutubePlayer height={270} play={false} videoId={item.youtubeKey} />
			</View>
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
		backgroundColor: "#fff",
	},
	image: {
		width: "100%",
		height: 200,
		resizeMode: "contain",
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
		width: "40%", // Adjust the width as needed
		height: 300, // Adjust the height as needed
		margin: 5, // Optional: Add margin to space out the GIFs
		resizeMode: "cover",
	},
});

export default Detail;
