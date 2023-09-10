import { StyleSheet, Text, View } from "react-native";

function Description({ description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

export default Description;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    paddingHorizontal: 50,
    paddingVertical: 10,
    margin: 10,
    marginTop: 20,
    alignItems: "center",
    width: "80%",
  },
  text: {
    // textAlign: "center",
  },
});
