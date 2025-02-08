import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, Modal, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import YoutubePlayer from "react-native-youtube-iframe";
import AudioPlayer from "@/components/AudioPlayer";
import { Ionicons } from "@expo/vector-icons";

const Detail = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const item = useLocalSearchParams();
	const navigation = useNavigation();

	const [modalVisible, setModalVisible] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (image) => {
		setSelectedImage(image);
		setModalVisible(true);
	};

	const closeModal = () => {
		setModalVisible(false);
		setSelectedImage(null);
	};

	const enSoundFiles = {
		0: require("@/assets/sounds/en/1.mp3"),
		1: require("@/assets/sounds/en/2.mp3"),
		2: require("@/assets/sounds/en/3.mp3"),
		3: require("@/assets/sounds/en/4.mp3"),
		4: require("@/assets/sounds/en/5a.mp3"),
		5: require("@/assets/sounds/en/5b.mp3"),
		6: require("@/assets/sounds/en/5c.mp3"),
		7: require("@/assets/sounds/en/5d.mp3"),
		8: require("@/assets/sounds/en/7.mp3"),
		9: require("@/assets/sounds/en/8.mp3"),
		10: require("@/assets/sounds/en/9.mp3"),
		11: require("@/assets/sounds/en/10a.mp3"),
		12: require("@/assets/sounds/en/10b.mp3"),
		13: require("@/assets/sounds/en/11.mp3"),
		14: require("@/assets/sounds/en/12.mp3"),
		15: require("@/assets/sounds/en/13.mp3"),
		16: require("@/assets/sounds/en/14.mp3"),
		17: require("@/assets/sounds/en/15.mp3"),
		18: require("@/assets/sounds/en/16.mp3"),
		19: require("@/assets/sounds/en/17.mp3"),
		20: require("@/assets/sounds/en/18.mp3"),
		21: require("@/assets/sounds/en/19.mp3"),
		22: require("@/assets/sounds/en/21.mp3"),
		23: require("@/assets/sounds/en/22.mp3"),
		24: require("@/assets/sounds/en/23.mp3"),
		25: require("@/assets/sounds/en/24.mp3"),
		26: require("@/assets/sounds/en/25.mp3"),
		27: require("@/assets/sounds/en/26.mp3"),
	};

	const zhSoundFiles = {
		0: require("@/assets/sounds/zh/1.mp3"),
		1: require("@/assets/sounds/zh/2.mp3"),
		2: require("@/assets/sounds/zh/3.mp3"),
		3: require("@/assets/sounds/zh/4.mp3"),
		4: require("@/assets/sounds/zh/5a.mp3"),
		5: require("@/assets/sounds/zh/5b.mp3"),
		6: require("@/assets/sounds/zh/5c.mp3"),
		7: require("@/assets/sounds/zh/5d.mp3"),
		8: require("@/assets/sounds/zh/7.mp3"),
		9: require("@/assets/sounds/zh/8.mp3"),
		10: require("@/assets/sounds/zh/9.mp3"),
		11: require("@/assets/sounds/zh/10a.mp3"),
		12: require("@/assets/sounds/zh/10b.mp3"),
		13: require("@/assets/sounds/zh/11.mp3"),
		14: require("@/assets/sounds/zh/12.mp3"),
		15: require("@/assets/sounds/zh/13.mp3"),
		16: require("@/assets/sounds/zh/14.mp3"),
		17: require("@/assets/sounds/zh/15.mp3"),
		18: require("@/assets/sounds/zh/16.mp3"),
		19: require("@/assets/sounds/zh/17.mp3"),
		20: require("@/assets/sounds/zh/18.mp3"),
		21: require("@/assets/sounds/zh/19.mp3"),
		22: require("@/assets/sounds/zh/21.mp3"),
		23: require("@/assets/sounds/zh/22.mp3"),
		24: require("@/assets/sounds/zh/23.mp3"),
		25: require("@/assets/sounds/zh/24.mp3"),
		26: require("@/assets/sounds/zh/25.mp3"),
		27: require("@/assets/sounds/zh/26.mp3"),
	};

	const soundFiles = locale === "en" ? enSoundFiles : zhSoundFiles;

	useEffect(() => {
		navigation.setOptions({ headerTitle: item.name });
	}, [navigation, item.name]);

	if (!item) {
		return <Text>Item not found</Text>;
	}

	return (
		<ScrollView>
			<Modal visible={modalVisible} transparent={true} onRequestClose={closeModal}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Image source={selectedImage} style={styles.modalImage} />
						<TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
							<Text style={styles.modalCloseText}>{i18n.t("close")}</Text>
							<Ionicons name="close" size={24} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
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
					<TouchableOpacity style={styles.gifButton} onPress={() => openModal(item.gif)}>
						<Image source={item.gif} style={styles.gif} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.gifButton} onPress={() => openModal(item.gif2)}>
						<Image source={item.gif2} style={styles.gif} />
					</TouchableOpacity>
				</View>
				<Collapsible title={i18n.t("useTips")}>
					<ThemedText style={styles.text}>{item.details}</ThemedText>
				</Collapsible>
			</View>
			<View style={styles.section}>
				<ThemedText style={styles.text}>{i18n.t("audioTitle")}</ThemedText>
				<View style={styles.section}>
					<AudioPlayer audioFile={soundFiles[item.id]} />
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
	gifButton: {
		width: "40%",
		backgroundColor: "yellow",
	},
	gif: {
		width: "100%", // Adjust the width as needed
		height: 300, // Adjust the height as needed
		resizeMode: "cover",
	},
	modalContainer: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.8)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		marginTop: 80,
		width: "90%",
		height: "90%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	modalImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	modalCloseButton: {
		position: "absolute",
		top: 0,
		right: 10,
		padding: 10,
		backgroundColor: "white",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	modalCloseText: {
		color: "black",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Detail;
