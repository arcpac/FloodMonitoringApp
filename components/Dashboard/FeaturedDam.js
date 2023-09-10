import { FlatList, StyleSheet, Text, View } from "react-native";
import SectionTitle from "../SectionTitle";
import DamCategoryList from "../../screens/DamCategoryList";
import CategoryGridTile from "../CategoryGridTile";
import { CATEGORIES } from "../../data/dummy-data";

function FeaturedDam() {
  const categories = CATEGORIES;
  return (
    <View style={styles.container}>
      <SectionTitle sectionTitle="Location" />
      {categories.map((item) => {
        console.log(item);
        return (
          <CategoryGridTile
            name={item.name}
            image={item.image}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </View>
  );
}

export default FeaturedDam;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
