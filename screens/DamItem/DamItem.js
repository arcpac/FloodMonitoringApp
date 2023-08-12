import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DAMS } from "../../data/dummy-data";
import { useNavigation } from "@react-navigation/core";


function DamItem({ route, navigation }) {
  const damID = route.params.damID;
  const selectedDam = DAMS.find((dam) => dam.id === damID);
  // const navigation = useNavigation();

  function renderProtectionUnits() {
    navigation.navigate("ProtectionUnits", {
      protectionUnits: selectedDam.unitIds,
    });
  }

  return (
    <View>
      <View>
        <Text>{selectedDam.name}</Text>
      </View>
      <Pressable onPress={renderProtectionUnits}>
        <Text>Protection units</Text>
      </Pressable>
      <View>
        <Image source={{ uri: selectedDam.image }} style={styles.image} />
      </View>
    </View>
  );
}

export default DamItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
});
