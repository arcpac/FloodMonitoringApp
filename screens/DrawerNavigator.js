import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./BottomTabs/BottomTabs";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: "#0073e5",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="WatchListcreen"
        component={BottomTabs}
        options={{ title: "Temp header title" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
