import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

function CategoryGridTile({ id, name, color, onPress }) {
  const navigation = useNavigation();

  function renderFilteredList() {
    navigation.navigate("DamList", { filterKey: id });
  }

  return (
    <View style={styles.gridStyle}>
      <Pressable onPress={renderFilteredList}>
        <View>
          <Text>{name}</Text>
        </View>
        <View></View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridStyle: {
    flex: 1,
  },
});
