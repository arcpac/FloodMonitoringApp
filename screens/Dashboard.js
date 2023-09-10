import { ScrollView, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import DamCategoryList from "./DamCategoryList";
import Notifications from "../components/Dashboard/Notifications";
import Forecast from "../components/Dashboard/Forecast";
import FeaturedDam from "../components/Dashboard/FeaturedDam";

function renderCategory(itemData) {
  return <CategoryGridTile name={itemData.item.name} />;
}

function Dashboard({ navigation }) {
  function renderDamList() {
    navigation.navigate("DamList", { filterKey: "all", drawer: false });
  }

  return (
    <View style={{ flex: 5 }}>
      <ScrollView>
        <Notifications />
        <View style={styles.forecast}>
          <Forecast />
        </View>
        <FeaturedDam />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            handler={renderDamList}
            text="View all"
            textDecoration=""
          />
        </View>
      </ScrollView>
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
  buttonContainer: {
    alignItems: "center",
  },
});
