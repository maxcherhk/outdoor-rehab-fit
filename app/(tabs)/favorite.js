import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

const Favourite = () => {
	const [bookmarkedItems, setBookmarkedItems] = useState([]);
	useFocusEffect(
		React.useCallback(() => {
			const fetchBookmarkedItems = async () => {
				const savedBookmarks = await AsyncStorage.getItem("bookmarkedItems");
				const bookmarked = savedBookmarks ? JSON.parse(savedBookmarks) : {};
				const items = equipmentData.filter((item, index) => bookmarked[index]);
				setBookmarkedItems(items);
			};
			fetchBookmarkedItems();
			console.log(bookmarkedItems);
		}, [])
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={bookmarkedItems}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Image source={item.icon} style={styles.icon} />
						<Text>{item.name}</Text>
					</View>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	item: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
	},
	icon: {
		width: 50,
		height: 50,
		marginRight: 16,
	},
});

export default Favourite;
