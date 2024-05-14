import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import HomeScreen from "../screens/HomeScreen";
import PersonScreen from "../screens/PersonScreen";
import OpeningScreen from "../screens/OpeningScreen"
import UsersScreen from "../screens/UsersScreen";
import { Ionicons } from "@expo/vector-icons";
import MovieScreen from "../screens/MovieScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  function HomeStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Opening"
      >
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Opening" component={OpeningScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Person" component={PersonScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Saved" component={SavedScreen} />
      </Stack.Navigator>
    );
  }

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Pagina inicial") {
              iconName = "home";
            } else if (route.name === "Pesquisar") {
              iconName = "search";
            } else if (route.name === "Favoritos") {
              iconName = "star";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "white" : "gray"}
              />
            );
          },
          tabBarActiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#1F1D2B",
            borderTopWidth: 0,
            paddingBottom: 10,
          },
        })}
      >
        <Tab.Screen name="Pagina inicial" component={HomeScreen} />
        <Tab.Screen name="Pesquisar" component={SearchScreen} />
        <Tab.Screen name="Favoritos" component={SavedScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
