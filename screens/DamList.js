import { FlatList } from "react-native";
import { DAMS } from "../data/dummy-data";
import DamGridTile from "../components/DamGridTile";

function renderListItem(itemData) {
  const item = itemData.item;
  const damItemProps = {
    id: item.id,
    name: item.name,
    description: item.description,
    image: item.image,
    damLevel: item.damLevel,
    capacity: item.capacity,
    size: item.size,
  };
  return <DamGridTile {...damItemProps} />;
}

function DamList({ route, navigation }) {
  const filterKey = route.params.filterKey;
  const filteredDams = DAMS.filter((dam) => {
    if (filterKey === "all") {
      return DAMS;
    } else {
      return dam.categoryIds.indexOf(filterKey) >= 0;
    }
  });

  return (
    <FlatList
      data={filteredDams}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      numColumns={2}
    />
  );
}

export default DamList;
