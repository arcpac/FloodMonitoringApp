import { StyleSheet, Text, View } from "react-native";

function SectionTitle({ sectionTitle }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{sectionTitle}</Text>
    </View>
  );
}

export default SectionTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#A8ACAE",
  },
  title: {
    fontWeight: "bold",
    color: "#0054A5",
    fontSize: 18
  },
});
