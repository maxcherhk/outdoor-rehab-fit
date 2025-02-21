import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const WeatherComponent = ({ i18n }) => {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc")
			.then((response) => response.json())
			.then((data) => {
				const temperatureData = data.temperature.data.find((entry) => entry.place === "京士柏");
				const uvData = data.uvindex.data.find((entry) => entry.place === "京士柏");

				const temperature = temperatureData ? temperatureData.value : null;
				let activitySuggestion = "";

				if (temperature !== null) {
					if (temperature >= 27) {
						activitySuggestion = "天氣炎熱，建議選擇室內運動或避免長時間戶外運動。";
					} else if (temperature >= 15) {
						activitySuggestion = "天氣適中，適合戶外運動，但請注意適當補水。";
					} else {
						activitySuggestion = "天氣較冷，建議穿著保暖衣物並進行適量運動。";
					}
				}

				setWeather({
					temperature: temperatureData ? `${temperatureData.value}°${temperatureData.unit}` : "N/A",
					uvIndex: uvData ? `${uvData.value} (${uvData.desc})` : "N/A",
					suggestion: activitySuggestion,
				});
			})
			.catch((error) => console.error("Error fetching weather data:", error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<View style={styles.outerContainer}>
			<View style={styles.container}>
				<Text style={styles.title}>{i18n.t("weatherInfo")}</Text>
				<View style={styles.infoContainer}>
					<MaterialCommunityIcons name="thermometer" size={24} color="black" />
					<Text style={styles.text}>
						{i18n.t("tempature")}: {weather.temperature}
					</Text>
				</View>
				<View style={styles.infoContainer}>
					<MaterialCommunityIcons name="weather-sunny" size={24} color="black" />
					<Text style={styles.text}>
						{i18n.t("uv")}: {weather.uvIndex}
					</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.suggestion}>{weather.suggestion}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	outerContainer: {
		flexDirection: "row",
	},
	container: {
		marginHorizontal: 10,
		padding: RFValue(12),
		borderRadius: 10,
		backgroundColor: "rgba(255, 255, 255, 0.8)",
	},
	title: {
		fontSize: RFValue(12),
		fontWeight: "bold",
		marginBottom: 10,
	},
	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 5,
	},
	text: {
		fontSize: RFValue(12),
		marginLeft: 5,
	},
	suggestion: {
		fontSize: RFValue(12),
		color: "#ff6600",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 10,
		width: 150,
	},
});

export default WeatherComponent;
