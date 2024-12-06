import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

const equipmentData = {
	"Show All": [
		{ name: "Equipment 1", type: "Type A", image: require("@/assets/images/equipment/1.jpg") },
		{ name: "Equipment 2", type: "Type B", image: require("@/assets/images/equipment/2.jpg") },
		// Add more equipment data here
	],
	"Muscle Strengthening": [
		{ name: "Equipment 3", type: "Type C", image: require("@/assets/images/equipment/1.jpg") },
		// Add more equipment data here
	],
	// Add more categories here
};

const EquipmentList = () => {
	const local = useLocalSearchParams();
	const category = local.category || "Show All";
	const equipmentList = [];

	return (
		<View style={styles.container}>
			{/* <FlatList
				data={equipmentList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.card}>
						<Image source={item.image} style={styles.image} />
						<View style={styles.info}>
							<Text style={styles.name}>{item.name}</Text>
							<Text style={styles.type}>{item.type}</Text>
						</View>
					</View>
				)}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
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
		padding: 16,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 8,
	},
	info: {
		marginLeft: 16,
		justifyContent: "center",
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
	},
	type: {
		fontSize: 14,
		color: "#666",
	},
});

export default EquipmentList;
