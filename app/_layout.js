import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useContext } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { I18n } from "i18n-js";
import { translations } from "../constants/Languages";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<LocaleProvider>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false, headerTitle: "Home" }} />
					<Stack.Screen name="(tabs)" options={{ headerShown: false, headerTitle: "Home" }} />
					<Stack.Screen
						name="outdoor"
						options={{ headerShown: false, headerBackTitle: "Back", title: "Outdoor Equipment" }}
					/>
					<Stack.Screen name="setting" options={{ headerShown: false }} />
					<Stack.Screen name="risk" options={{ headerShown: false }} />
					<Stack.Screen name="firstdisclaimer" options={{ headerShown: false }} />
					<Stack.Screen name="firstsafety" options={{ headerShown: false }} />
					<Stack.Screen name="location" options={{ title: "Location" }} />
					<Stack.Screen name="research" options={{ title: "Research" }} />
					<Stack.Screen name="firstquestionnaire" options={{ title: "PAR-Q" }} />
					<Stack.Screen name="+not-found" />
				</Stack>
				<StatusBar style="auto" />
			</ThemeProvider>
		</LocaleProvider>
	);
}
