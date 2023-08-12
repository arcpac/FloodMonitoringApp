import { FlatList, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import DamCategoryList from "./DamCategoryList";

function renderCategory(itemData) {
  return <CategoryGridTile name={itemData.item.name} />;
}

function Dashboard({ navigation }) {
  function renderDamList() {
    navigation.navigate("DamList", {filterKey: "all", drawer: false});
  }
  return (
    <View>
      <View>
        <Text>Notifications</Text>
        <View>
          <Text>1</Text>
        </View>
        <View>
          <Text>2</Text>
        </View>
        <View>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.forecast}>
        <Text>Weather forecast</Text>
        <View style={styles.forecastIcons}>
          <View style={styles.forecastIcon}>
            <Text>1</Text>
          </View>
          <View style={styles.forecastIcon}>
            <Text>2</Text>
          </View>
          <View style={styles.forecastIcon}>
            <Text>3</Text>
          </View>
          <View style={styles.forecastIcon}>
            <Text>4</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Dashboard</Text>
        <DamCategoryList />
        <PrimaryButton onPress={renderDamList}>View all</PrimaryButton>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  forecastIcons: {
    flexDirection: "row",
  },
  forecastIcon: {
    borderWidth: 2,
  },
});
