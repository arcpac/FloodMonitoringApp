import { StyleSheet, Text } from "react-native";

function Link({ text }) {
  return <Text style={styles.text}>{text}</Text>;
}
export default Link;

const styles = StyleSheet.create({
  text: {
    textDecorationLine: "underline",
    color: "#0054A5",
  },
});
