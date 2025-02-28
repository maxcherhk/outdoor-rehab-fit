import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { LocaleContext } from "../../../contexts/LocaleContext";
import { TouchableOpacity } from "react-native";

export default function SettingLayout() {
	const { i18n } = useContext(LocaleContext);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: i18n.t("setting"),
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="about"
				options={{
					title: i18n.t("aboutApp"),
				}}
			/>
			<Stack.Screen
				name="disclaimer"
				options={{
					title: i18n.t("settingDisclaimer"),
				}}
			/>
			<Stack.Screen
				name="info"
				options={{
					title: i18n.t("aboutTeam"),
				}}
			/>
		</Stack>
	);
}
