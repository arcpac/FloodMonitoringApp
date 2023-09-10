import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";

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
    <View style={styles.tileContainer}>
      <Pressable onPress={itemHandler}>
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

export default DamGridTile;

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
    height: 140,
    overflow: "hidden",
  },
});
