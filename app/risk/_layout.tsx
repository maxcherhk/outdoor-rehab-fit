import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function RiskLayout() {
	const colorScheme = useColorScheme();
	const { i18n } = useContext(LocaleContext);

	const renderBackButton = () => (
		<TouchableOpacity onPress={() => router.back()}>
			<Ionicons name="chevron-back" size={RFValue(18)} color={colorScheme === "dark" ? "#fff" : "#000"} />
		</TouchableOpacity>
	);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					headerShown: true,
					title: i18n.t("risk"),
					headerLeft: renderBackButton,
				}}
			/>
			<Stack.Screen
				name="questionnaire"
				options={{
					title: i18n.t("parq"),
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="safety"
				options={{
					title: i18n.t("sprm"),
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
