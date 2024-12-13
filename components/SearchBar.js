// components/SearchBar.js
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({ value, onChangeText, placeholder }) => {
	return (
		<View style={styles.container}>
			<Ionicons name="search" size={20} color="gray" style={styles.icon} />
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor="gray"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		width: "100%",
		height: 70,
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 15,
		backgroundColor: "#FFF",
		borderColor: "#EB9481",
		borderWidth: 1.5,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		fontSize: 22,
		color: "black",
	},
});

export default SearchBar;
