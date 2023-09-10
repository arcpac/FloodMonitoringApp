import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { NOTIFS } from "../../data/dummy-data";
import NotificationItem from "./NotificationItem";
import SectionTitle from "../SectionTitle";

function Notifications() {
  const notifs = NOTIFS;

  return (
    <View style={styles.container}>
      <SectionTitle sectionTitle="Notifications" />
      {notifs.map((item) => {
        return (
          <NotificationItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </View>
  );
}

export default Notifications;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
