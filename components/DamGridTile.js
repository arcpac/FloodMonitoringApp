import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

function DamGridTile({
  id,
  name,
  description,
  image,
  damLevel,
  capacity,
  size,
  onPress,
}) {
  const navigation = useNavigation();

  function itemHandler() {
    navigation.navigate("DamItem", { damID: id });
  }
  return (
    <View style={styles.tileGridStyle}>
      <Pressable style={styles.button} onPress={itemHandler}>
        <View>
          <Text>{name}</Text>
          <Text>{capacity}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default DamGridTile;

const styles = StyleSheet.create({
  tileGridStyle: {
    borderWidth: 1,
    margin: 4,
    height: 150,
    flex: 1,
  },
  button: {
    flex: 1,
  },
});
