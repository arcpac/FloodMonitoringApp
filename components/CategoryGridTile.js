import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

function CategoryGridTile({ id, name, color, onPress, image }) {
  const navigation = useNavigation();

  function renderFilteredList() {
    navigation.navigate("DamList", { filterKey: id });
  }

  return (
    <View style={styles.tileContainer}>
      <Pressable onPress={renderFilteredList}>
        <View style={styles.tile}>
          <Text>{name}</Text>
        </View>
        <View>
          <Image style={styles.image} source={image} />
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#A8ACAE",
    borderRadius: 10,
    margin: 12,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
  },
  tile: {
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    overflow: "hidden",
  },
});
