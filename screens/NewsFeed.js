import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NEWSFEED } from "../data/dummy-data";
import Link from "../components/Link";

const NewsFeedCard = ({ title, imageSource, imageNews, news, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <Image source={imageNews} style={styles.profileImage} />
        <Text style={styles.news}>{news}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.cardFooter}>
        <Link text="view details" />
      </View>
    </View>
  );
};

function NewsFeed() {
  return (
    <View style={styles.appContainer}>
      <FlatList
        data={NEWSFEED}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(itemData) => {
          return (
            <NewsFeedCard
              title={itemData.item.title}
              news={itemData.item.news}
              imageNews={itemData.item.imageNews}
              imageSource={itemData.item.image}
              description={itemData.item.description}
            />
          );
        }}
      />
    </View>
  );
}

export default NewsFeed;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#A8ACAE",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
    color: "#606365",
  },
  news: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#606365",
  },
  cardFooter: {
    alignItems: "center",
  },
});
