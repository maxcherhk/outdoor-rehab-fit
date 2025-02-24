import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import { TouchableOpacity, Text } from "react-native";

export default function ResearchLayout() {
	const colorScheme = useColorScheme();
	const { i18n } = useContext(LocaleContext);

	const renderBackButton = () => (
		<TouchableOpacity onPress={() => router.back()}>
			<Ionicons name="chevron-back" size={24} color={colorScheme === "dark" ? "#fff" : "#000"} />
		</TouchableOpacity>
	);

	return (
		<Stack
			screenOptions={{
				headerShown: true,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					headerShown: true,
					title: i18n.t("research"),
					headerLeft: renderBackButton,
				}}
			/>
		</Stack>
	);
}
