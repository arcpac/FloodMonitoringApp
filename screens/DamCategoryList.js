import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderListItem(itemData) {
  return <CategoryGridTile name={itemData.item.name} id={itemData.item.id} />;
}

function DamCategoryList() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      numColumns={2}
    />
  );
}

export default DamCategoryList;
