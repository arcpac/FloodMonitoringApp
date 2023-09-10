import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Description from "./Description";
import Map from "../Map";
import { useNavigation } from "@react-navigation/core";
import { DAMS } from "../../data/dummy-data";

function DamDetailsCard(props) {
  const navigation = useNavigation();
  const selectedDam = DAMS.find((dam) => dam.id === props.id);
  function floodProtectionUnitHandler() {
    navigation.navigate("ProtectionUnits", {
      protectionUnits: selectedDam.unitIds,
      damID: props.id,
    });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.left}>
            <View style={styles.statusContainer}>
              <Text
                style={[
                  styles.statusText,
                  { fontSize: 36, fontWeight: "bold" },
                ]}
              >
                {props.damLevel}
              </Text>
              <Text style={styles.statusText}>Dam Level</Text>
            </View>
            <View>
              <Text style={styles.information}>Length: 45</Text>
              <Text style={styles.information}>Width: 71 </Text>
              <Text style={styles.information}>Size: 7.8 KM </Text>
              <Pressable onPress={floodProtectionUnitHandler}>
                <Text style={styles.link}> Flood protection units </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.right}>
            <Image source={props.image} style={styles.image} />
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Description description={props.description} />
        </View>
        <View style={{ backgroundColor: "black", borderWidth: 2 }}>
          <Map />
        </View>
      </View>
    </ScrollView>
  );
}

export default DamDetailsCard;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  //header
  headerContainer: {
    alignItems: "center",
  },
  // preview section
  detailContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  statusContainer: {
    margin: 10,
    marginBottom: 38,
    alignItems: "center",
  },
  statusText: {
    color: "#0054A5",
  },
  left: {
    flex: 0.8,
    alignItems: "center",
  },
  right: {
    flex: 1,
    borderColor: "#A8ACAE",
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    color: "#0054A5",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  //image
  image: {
    flex: 1,
    width: "100%",
    height: 140,
    overflow: "hidden",
  },
  //information
  information: {
    fontWeight: "bold",
  },
  //descriptiop
  descriptionContainer: {
    alignItems: "center",
  },
  link: {
    marginVertical: 5,
    color: "#0054A5",
    textDecorationLine: "underline",
  },
});
