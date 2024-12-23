import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack, router } from "expo-router";

export default function OutdoorLayout() {
	const colorScheme = useColorScheme();
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* Optionally configure static options outside the route.*/}
			<Stack.Screen name="index" options={{ title: "Categories" }} />
			<Stack.Screen name="list" options={{ headerShown: true, title: "Equipment" }} />
			<Stack.Screen name="detail" options={{ headerShown: true, title: "Details" }} />
		</Stack>
	);
}
