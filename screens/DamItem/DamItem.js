import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DAMS } from "../../data/dummy-data";
import DamDetailsCard from "../../components/DamDetails/DamDetailsCard";
import Description from "../../components/DamDetails/Description";

function DamItem({ route, navigation }) {
  const damID = route.params.damID;
  const selectedDam = DAMS.find((dam) => dam.id === damID);

  function renderProtectionUnits() {
    navigation.navigate("ProtectionUnits", {
      protectionUnits: selectedDam.unitIds,
      damID: damID,
    });
  }

  return (
    <View>
      <DamDetailsCard {...selectedDam} />
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
