import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";

export default function RiskLayout() {
	const colorScheme = useColorScheme();
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* Optionally configure static options outside the route.*/}
			<Stack.Screen name="index" options={{ headerShown: false, title: "Equipment" }} />
			<Stack.Screen name="disclaimer" options={{ title: "Disclaimer" }} />
			<Stack.Screen name="safety" options={{ title: "Safety" }} />
		</Stack>
	);
}
