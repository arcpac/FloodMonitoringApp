import { StyleSheet, Text, View } from "react-native";
function WatchList() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text>WatchList</Text>
      </View>
    </View>
  );
}
export default WatchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BAD7E9",
    borderWidth: 1,
    borderColor: "red",
  },
  listContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 25,
  },
});
