import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./screens/Dashboard";
import { useState } from "react";
import DamList from "./screens/DamList";
import DamItem from "./screens/DamItem/DamItem";
import ProtectionUnit from "./screens/ProtectionUnit/ProtectionUnit";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./screens/Account/Account";
import WatchList from "./screens/WatchList";
import NewsFeed from "./screens/NewsFeed";
import AccountDetails from "./screens/Account/AccountDetails";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate("Home");
                navigation.navigate("Logout");
              }}
            >
              <Text>Logout</Text>
            </Pressable>
          );
        },
      })}
    >
      <BottomTabs.Screen name="WatchList" component={WatchList} />
      <BottomTabs.Screen name="Home" component={Dashboard} />
      <BottomTabs.Screen name="News Feed" component={NewsFeed} />
      <BottomTabs.Screen name="Account" component={Account} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  function logInHandler(result) {
    if (result) {
      setIsSignedIn(true);
    } else {
      false;
    }
  }
  return (
    <>
      <StatusBar style="dark" />
      {isSignedIn ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Overview"
              component={Overview}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name="DamList" component={DamList}></Stack.Screen>
            <Stack.Screen name="DamItem" component={DamItem}></Stack.Screen>
            <Stack.Screen
              name="ProtectionUnits"
              component={ProtectionUnit}
            ></Stack.Screen>
            <Stack.Screen
              name="accountDetails"
              component={AccountDetails}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Login loginValidate={logInHandler} />
      )}
    </>
  );
}
