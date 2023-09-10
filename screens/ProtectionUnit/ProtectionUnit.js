import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { DAMS, UNITS } from "../../data/dummy-data";
import List from "../../components/List";
import { useState } from "react";
import MapTypeView from "../../components/ProtectionUnits/MapTypeView";
import UnitGridTile from "../../components/ProtectionUnits/UnitGridTile";
import MapView, { Marker } from "react-native-maps";
import Description from "../../components/DamDetails/Description";
function renderListItem(itemData) {
  return <List item={{ ...itemData.item }} />;
}
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

function ProtectionUnit({ route, navigation }) {
  const protectionUnitIds = route.params.protectionUnits;
  const damID = route.params.damID;
  const dam = DAMS.find((item) => item.id === damID);
  const filteredProtectionUnits = protectionUnitIds.map((id) => {
    return UNITS.find((unit) => unit.id === id);
  });
  const viewTypes = ["List", "Map"];
  const [viewType, setViewType] = useState("list");
  function listHandler() {
    setViewType("list");
  }
  function mapHandler() {
    setViewType("map");
  }

  function Content({ viewType }) {
    console.log("sdfsffs");
    if (viewType === "list") {
      return (
        <FlatList
          keyExtractor={(item) => item.id}
          data={filteredProtectionUnits}
          renderItem={renderListItem}
        />
      );
    }
    if (viewType === "map") {
      return (
        <View style={mapViewStyles.mapViewContainer}>
          <View style={mapViewStyles.mapContainer}>
            <MapView
              style={mapViewStyles.map}
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
          <View style={mapViewStyles.detailsContainer}>
            <Description description={dam.description} />
            <View style={mapViewStyles.techDetailsContainer}>
              <View style={mapViewStyles.techDetails}>
                <Text style={mapViewStyles.techTextTitle}>Capacity</Text>
                <Text style={mapViewStyles.techText}>{dam.capacity}GL</Text>
              </View>
              <View style={mapViewStyles.techDetails}>
                <Text style={mapViewStyles.techTextTitle}>Dam Lvl</Text>
                <Text style={mapViewStyles.techText}>{dam.damLevel}%</Text>
              </View>
              <View style={mapViewStyles.techDetails}>
                <Text style={mapViewStyles.techTextTitle}>Dam Size</Text>
                <Text style={mapViewStyles.techText}>{dam.size}KM2</Text>
              </View>
            </View>
          </View>
          <View style={mapViewStyles.listContainer}>
            <FlatList
              horizontal
              data={filteredProtectionUnits}
              keyExtractor={(item) => item.id}
              renderItem={renderList}
            />
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.filterContainer}>
        <Pressable onPress={listHandler}>
          <View style={styles.filterButton}>
            <Text style={styles.filterButtonText}>List</Text>
          </View>
        </Pressable>
        <Pressable onPress={mapHandler}>
          <View style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Map</Text>
          </View>
        </Pressable>
      </View>
      <Content viewType={viewType} />
    </View>
  );
}

export default ProtectionUnit;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "#BAD7E9",
    flex: 1,
  },
  filterContainer: {
    margin: 5,
    marginVertical: 15,
    flexDirection: "row",
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: "#0054A5",
    marginHorizontal: 7,
  },
  filterButtonText: {
    color: "white",
  },
});

const mapViewStyles = StyleSheet.create({
  mapViewContainer: {
    flexDirection: "column",
    flex: 1,
  },
  mapContainer: {
    flex: 2,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    flex: 1.5,
    backgroundColor: "white",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    padding: 2,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  techDetailsContainer: {
    flexDirection: "row",
  },
  techDetails: {
    alignItems: "center",
    paddingHorizontal: 5,
    margin: 10,
  },
  techText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
