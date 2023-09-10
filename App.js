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
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Overview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => {
          return (
            <Pressable
              onPress={() => {}}
              style={{ marginHorizontal: 5, marginRight: 20 }}
            >
              <Text style={{ color: "#0054A5" }}>Logout</Text>
            </Pressable>
          );
        },
      })}
    >
      {/* <BottomTabs.Screen name="Watch List" component={WatchList} /> */}
      <BottomTabs.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="News Feed"
        component={NewsFeed}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
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

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="DamList" component={DamList} />
          <Stack.Screen name="DamItem" component={DamItem} />
          <Stack.Screen name="ProtectionUnits" component={ProtectionUnit} />
          <Stack.Screen name="accountDetails" component={AccountDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
