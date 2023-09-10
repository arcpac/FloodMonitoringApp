import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import UnitGridTile from "./UnitGridTile";
import { UNITS } from "../../data/dummy-data";
function renderList(itemData) {
  const item = itemData.item;
  const unitItemProps = {
    id: item.id,
    name: item.name,
    image: item.image,
    status: item.status,
  };
  return <UnitGridTile {...unitItemProps} />;
}
function MapTypeView() {
  return (
    <View style={styles.mapViewContainer}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.8688,
            longitude: 151.2093,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
      <View style={styles.detailsContainer}>
        <Text>Details</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          // horizontal
          data={UNITS}
          keyExtractor={(item) => item.id}
          renderItem={renderList}
        />
      </View>
    </View>
  );
}

export default MapTypeView;

const styles = StyleSheet.create({
  mapViewContainer: {
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
  },
  mapContainer: {
    flex: 2.5,
  },
  detailsContainer: {
    flex: 1,
    borderWidth: 3,
    borderColor: "red",
  },
  listContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
