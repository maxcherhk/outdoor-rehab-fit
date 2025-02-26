// components/SearchBar.js
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

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
		width: wp("90%"),
		height: hp("8%"),
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
		paddingHorizontal: wp("5%"),
		marginVertical: hp("1%"),
		backgroundColor: "#FFF",
		borderColor: "#EB9481",
		borderWidth: 1.5,
	},
	icon: {
		marginRight: wp("2%"),
	},
	input: {
		flex: 1,
		fontSize: RFValue(16),
		color: "black",
	},
});

export default SearchBar;
