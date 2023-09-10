import { StyleSheet, Text, View } from "react-native";

function NotificationItem({ id, title, description }) {
  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

export default NotificationItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#D4D6D8",
  },
  title: {
    color: "#0054A5",
    fontSize: 16,
  },
});
