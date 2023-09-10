import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";

function UnitGridTile({ id, name, image, status, active }) {
  return (
    <View style={styles.tileContainer}>
      <View style={styles.tile}>
        <Text>{name}</Text>
      </View>
      <View>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
}

export default UnitGridTile;

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    // borderWidth: 0.5,
    borderRadius: 10,
    margin: 12,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
    width: "100%",
    height: 100,
  },
  tile: {
    padding: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
});
