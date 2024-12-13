import { Tabs } from "expo-router";
import React from "react";
import { Platform, Image, View } from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: "absolute",
						height: 100,
					},
					default: {
						height: 100,
					},
				}),
				tabBarLabelStyle: {
					fontSize: 18, // Increase font size for better readability
					marginTop: 3, // Adjust margin to position the label
				},
				tabBarIconStyle: {
					marginTop: 12, // Adjust margin to position the icon
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <IconSymbol size={32} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="favorite"
				options={{
					title: "Favorite",
					tabBarIcon: ({ color }) => <MaterialIcons size={32} name="favorite" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="setting"
				options={{
					title: "Setting",
					tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
				}}
			/>
		</Tabs>
	);
}
