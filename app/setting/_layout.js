import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";
import { LocaleContext } from "../../contexts/LocaleContext";
import { TouchableOpacity, Text } from "react-native";

export default function SettingLayout() {
	const colorScheme = useColorScheme();
	const { i18n, locale, changeLanguage } = useContext(LocaleContext);

	return (
		<Stack
			screenOptions={{
				headerShown: true,
			}}
		>
			<Stack.Screen
				name="about"
				options={{
					title: i18n.t("aboutApp"),
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons name="arrow-back" size={24} color="black" />
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="disclaimer"
				options={{
					title: i18n.t("settingDisclaimer"),
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons name="arrow-back" size={24} color="black" />
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="info"
				options={{
					title: i18n.t("aboutTeam"),
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons name="arrow-back" size={24} color="black" />
						</TouchableOpacity>
					),
				}}
			/>
		</Stack>
	);
}
