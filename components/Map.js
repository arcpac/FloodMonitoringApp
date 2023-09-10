import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  return (
      <View style={styles.card}>
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
  );
}

export default Map;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    // margin: 20,
    // padding: 10,
  },
  map: {
    width: "100%",
    height: 500,
  },
});
