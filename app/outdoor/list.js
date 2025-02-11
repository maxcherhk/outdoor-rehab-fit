import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from "react-native";
import SearchBar from "../../components/SearchBar";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useNavigation } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from "react-native-responsive-fontsize";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const EquipmentList = () => {
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const equipmentData = i18n.t("equipmentList", { returnObjects: true });
	const buttons = [
		{ icon: require("@/assets/icons/outdoor/list.png"), text: i18n.t("all") },
		{ icon: require("@/assets/icons/outdoor/muscle.png"), text: i18n.t("muscle") },
		{ icon: require("@/assets/icons/outdoor/flexibility.png"), text: i18n.t("mobility") },
		{ icon: require("@/assets/icons/outdoor/balance.png"), text: i18n.t("balance") },
		{ icon: require("@/assets/icons/outdoor/aerobic.png"), text: i18n.t("aerobic") },
		{ icon: require("@/assets/icons/outdoor/wheelchair.png"), text: i18n.t("wheelchair") },
		{ icon: require("@/assets/icons/outdoor/multi.png"), text: i18n.t("multifunctional") },
		{ icon: require("@/assets/icons/outdoor/relax.png"), text: i18n.t("relaxation") },
		{ icon: require("@/assets/icons/outdoor/upper.png"), text: i18n.t("upper") },
		{ icon: require("@/assets/icons/outdoor/lower.png"), text: i18n.t("lower") },
	];
	const renderCategoryIcons = (categories) => {
		return (
			<View style={styles.iconRow}>
				{categories.map((category) => {
					const button = buttons.find((btn) => btn.text === i18n.t(category));
					return button ? <Image key={category} source={button.icon} style={styles.categoryIcon} /> : null;
				})}
			</View>
		);
	};
	const { categoryName, categoryId } = useLocalSearchParams();
	const equipmentList = equipmentData;
	const navigation = useNavigation();
	const [searchQuery, setSearchQuery] = useState("");
	const [bookmarked, setBookmarked] = useState({});

	useEffect(() => {
		navigation.setOptions({ headerTitle: categoryName });
	}, [navigation, categoryName]);

	useEffect(() => {
		const loadBookmarks = async () => {
			try {
				const storedBookmarks = await AsyncStorage.getItem("bookmarkedItems");
				if (storedBookmarks) {
					setBookmarked(JSON.parse(storedBookmarks));
				}
			} catch (error) {
				console.error("Error loading bookmarks", error);
			}
		};

		loadBookmarks();
	}, []);

	const toggleBookmark = async (itemId) => {
		try {
			let updatedBookmarks = { ...bookmarked };
			if (updatedBookmarks[itemId]) {
				delete updatedBookmarks[itemId];
			} else {
				updatedBookmarks[itemId] = true;
			}
			setBookmarked(updatedBookmarks);
			await AsyncStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
		} catch (error) {
			console.error("Error updating bookmarks", error);
		}
	};

	const filteredEquipmentList = equipmentList.filter((item) => {
		if (categoryName === "Show All" || categoryName === "顯示全部") {
			return item.name.toLowerCase().includes(searchQuery.toLowerCase());
		}
		return item.categories.includes(categoryId) && item.name.toLowerCase().includes(searchQuery.toLowerCase());
	});

	return (
		<View style={styles.container}>
			{/* <View style={styles.header}>
				<CustomBackButton />
				<Text style={styles.headerText}>{category}</Text>
			</View> */}
			<SearchBar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search equipment" />
			<FlatList
				data={filteredEquipmentList}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => router.push({ pathname: "/outdoor/detail", params: item })}
						style={styles.card}
					>
						<Image source={item.icon} style={styles.image} />
						<View style={styles.info}>
							<Text style={styles.name}>{item.name}</Text>
						</View>
						{renderCategoryIcons(item.categories)}
						<TouchableOpacity style={styles.bookmark} onPress={() => toggleBookmark(item.id)}>
							<Ionicons
								name={bookmarked[item.id] ? "heart" : "heart-outline"}
								size={38}
								color={bookmarked[item.id] ? "red" : "gray"}
							/>
						</TouchableOpacity>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 16,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingVertical: 10,
		position: "relative",
	},
	headerText: {
		flex: 1,
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
	},
	card: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 8,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 5,
		marginBottom: 16,
		height: screenHeight * 0.2,
		// Shadow for iOS
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		// Elevation for Android
		elevation: 5,
		width: "99%",
	},
	image: {
		width: "35%",
		height: "100%",
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	info: {
		paddingTop: 16,
		width: "65%",
		paddingLeft: 16,
	},
	name: {
		fontSize: RFValue(18),
		fontWeight: "bold",
		flexShrink: 1,
	},
	type: {
		fontSize: 14,
		color: "#666",
	},
	bookmark: {
		position: "absolute",
		bottom: 16,
		right: 16,
	},
	iconRow: {
		position: "absolute",
		left: "40%",
		bottom: 20,
		flexDirection: "row",
	},
	categoryIcon: {
		width: screenWidth * 0.06,
		height: screenWidth * 0.06,
		marginRight: 8,
	},
});

export default EquipmentList;
