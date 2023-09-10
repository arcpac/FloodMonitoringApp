import { Image, StyleSheet, Text, View } from "react-native";

function List({ item }) {
  console.log(item);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.left}>
        <Image style={styles.image} source={item.image} />
      </View>
      <View style={mapViewStyles.techDetailsContainer}>
        <View style={{paddingHorizontal: 5}}>
          <Text style={styles.itemTitle}> {item.name}</Text>
        </View>
        <View style={styles.techDetailsRight}>
          <View style={styles.techDetails}>
            <Text style={styles.techText}>Capacity: 142GL </Text>
          </View>
          <View style={styles.techDetails}>
            <Text style={styles.techText}>Dam Lvl: 81%</Text>
          </View>
          <View style={styles.techDetails}>
            <Text style={styles.techText}>Dam Size: 10.5 KM2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default List;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
 padding: 10,
    margin: 8,
    borderRadius: 10,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    borderColor: "#A8ACAE",
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
  },
  //image
  image: {
    width: "100%",
    height: 100,
    overflow: "hidden",
  },
  itemTitle: {
    color: "#0054A5",
    fontWeight: "bold",
  },
  techDetailsRight: {
    paddingHorizontal: 5,
    alignItems: "left",
    flex: 1,
  },
  techDetails: {
    alignItems: "center",
    margin: 1,
  },
  techText: {
    color: "#696969",
  },
});

const mapViewStyles = StyleSheet.create({
  techDetailsContainer: {
    flex: 2,
    flexDirection: "row",
    // justifyContent: "center",
  },
});
