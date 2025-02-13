import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Modal, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import YoutubePlayer from "react-native-youtube-iframe";
import AudioPlayer from "@/components/AudioPlayer";
import { Ionicons } from "@expo/vector-icons";
import { enSoundFiles, zhSoundFiles } from "../../constants/Equipments";

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

	const soundFile = locale === "en" ? enSoundFiles : zhSoundFiles;

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
					<AudioPlayer audioFile={soundFile[item.id]} />
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
