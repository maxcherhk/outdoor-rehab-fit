import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import CustomBackButton from "../../components/CustomBackButton";

import { LocaleContext } from "../../contexts/LocaleContext";

export default function OutdoorLayout() {
	const colorScheme = useColorScheme();
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);
	const renderBackButton = () => (
		<TouchableOpacity onPress={() => router.back()}>
			<Ionicons name="chevron-back" size={32} color={colorScheme === "dark" ? "#fff" : "#000"} />
		</TouchableOpacity>
	);
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* Optionally configure static options outside the route.*/}
			<Stack.Screen name="index" options={{ title: "Categories" }} />
			<Stack.Screen name="list" options={{ headerShown: true, title: "Equipment" }} />
			<Stack.Screen name="detail" options={{ headerShown: true, title: "Details", headerLeft: renderBackButton }} />
		</Stack>
	);
}
