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
				const humidityData = data.humidity.data.find((entry) => entry.place === "香港天文台");

				setWeather({
					temperature: temperatureData ? `${temperatureData.value}°${temperatureData.unit}` : "N/A",
					uvIndex: uvData ? `${uvData.value} (${uvData.desc})` : "N/A",
					humidity: humidityData ? `${humidityData.value}%` : "N/A",
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
				<View style={styles.infoContainer}>
					<MaterialCommunityIcons name="water-percent" size={24} color="black" />
					<Text style={styles.text}>
						{i18n.t("humidity")}: {weather.humidity}
					</Text>
				</View>
			</View>
			<View style={styles.container}>
				<Text style={styles.suggestion}>{i18n.t("uvWarn")}</Text>
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
		justifyContent: "center",
	},
	title: {
		fontSize: RFValue(12),
		fontWeight: "bold",
		marginBottom: 10,
	},
	infoContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		fontSize: RFValue(12),
		marginLeft: 5,
	},
	suggestion: {
		fontSize: RFValue(9),
		color: "#ff6600",
		fontWeight: "bold",
		textAlign: "center",
		width: 150,
	},
});

export default WeatherComponent;
