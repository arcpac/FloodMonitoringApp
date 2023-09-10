import { Image, StyleSheet, Text, View } from "react-native";
import SectionTitle from "../SectionTitle";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

function Forecast() {
  return (
    <View style={styles.container}>
      <SectionTitle sectionTitle="Weather forecast" />
      <View style={styles.forecastIconsContainer}>
        <View style={styles.forecastIcons}>
          <View style={[styles.forecastIcon, { backgroundColor: "#BAD7E9" }]}>
            <Text style={[styles.iconTitle, { color: "#1F6AAF" }]}>
              TEMPERATURE
            </Text>
            <View style={styles.icon}>
              <FontAwesome5 name="temperature-high" size={50} color="#1F6AAF" />
            </View>
            <Text style={[styles.iconTitle, { color: "#1F6AAF" }]}>
              12 degrees
            </Text>
          </View>
          <View style={[styles.forecastIcon, { backgroundColor: "#FFCD34" }]}>
            <Text style={[styles.iconTitle, { color: "#1F6AAF" }]}>
              HUMIDITY
            </Text>
            <View style={styles.icon}>
              <FontAwesome5 name="wind" size={50} color="#1F6AAF" />
            </View>
            <Text style={[styles.iconTitle, { color: "#1F6AAF" }]}>
              12 degrees
            </Text>
          </View>
        </View>
        <View style={styles.forecastIcons}>
          <View style={[styles.forecastIcon, { backgroundColor: "#1F6AAF" }]}>
            <Text style={[styles.iconTitle, { color: "#BAD7E9" }]}>
              PRECIPITATION
            </Text>
            <View style={styles.icon}>
              <Ionicons name="water-outline" size={50} color="#BAD7E9" />
            </View>
            <Text style={[styles.iconTitle, { color: "#BAD7E9" }]}>
              12 degrees
            </Text>
          </View>
          <View style={[styles.forecastIcon, { backgroundColor: "#FFBEA3" }]}>
            <Text style={[styles.iconTitle, { color: "#DD664F" }]}>
              UV INDEX
            </Text>
            <View style={styles.icon}>
              <FontAwesome5 name="temperature-high" size={50} color="#DD664F" />
            </View>
            <Text style={[styles.iconTitle, { color: "#DD664F" }]}> 0 Low</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Forecast;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  forecastIconsContainer: {
    marginVertical: 5,
    alignItems: "center",
  },
  forecastIcons: {
    flexDirection: "row",
    width: "80%",
  },
  forecastIcon: {
    flex: 1,
    padding: 10,
    margin: 5,
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  iconTitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  icon: {
    padding: 5,
    marginVertical: 10,
  },
});
