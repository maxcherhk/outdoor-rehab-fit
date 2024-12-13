import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import CustomBackButton from "../../components/CustomBackButton";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const equipmentData = {
	"Show All": [
		{
			name: "Tai Chi Wheel\nTaiju Pushing\nPush Hands",
			type: "Type A",
			image: require("@/assets/images/icon/1.jpg"),
		},
		{ name: "Equipment 2", type: "Type B", image: require("@/assets/images/icon/2.jpg") },
		// Add more equipment data here
	],
	"Muscle Strengthening": [
		{ name: "Equipment 3", type: "Type C", image: require("@/assets/images/icon/1.jpg") },
		// Add more equipment data here
	],
	// Add more categories here
};

const EquipmentList = () => {
	const local = useLocalSearchParams();
	const category = local.category || "Show All";
	const equipmentList = equipmentData["Show All"];

	const [searchQuery, setSearchQuery] = useState("");
	const [bookmarked, setBookmarked] = useState({});

	const toggleBookmark = (index) => {
		setBookmarked((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const filteredEquipmentList = equipmentList.filter((item) =>
		item.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<View style={styles.container}>
			{/* <View style={styles.header}>
				<CustomBackButton />
				<Text style={styles.headerText}>{category}</Text>
			</View> */}
			<SearchBar value={searchQuery} onChangeText={setSearchQuery} placeholder="Search equipment" />
			<FlatList
				data={filteredEquipmentList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<View style={styles.card}>
						<Image source={item.image} style={styles.image} />
						<View style={styles.info}>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.type}>{item.type}</Text>
						</View>
						<TouchableOpacity style={styles.bookmark} onPress={() => toggleBookmark(index)}>
							<Ionicons
								name={bookmarked[index] ? "heart" : "heart-outline"}
								size={38}
								color={bookmarked[index] ? "red" : "gray"}
							/>
						</TouchableOpacity>
					</View>
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
		height: 180,
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
		width: 130,
		height: "100%",
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	info: {
		marginLeft: 16,
		justifyContent: "center",
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
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
});

export default EquipmentList;
