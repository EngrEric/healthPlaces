import React, { FC } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import homeComp from "../home";
import discover from "../sideBar";
import place from "../selectedPlace";
import { PlacesData } from "../home/actions";
import search from "../selectedPlace";

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabNavParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="none"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={homeComp.Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Current"
        component={homeComp.Home}
        options={{
          tabBarLabel: "Your Environ",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="enviromento" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={discover.Discover}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="find" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      {/* OTHER ROUTES GOES HERE */}
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={BottomTabs}
          options={({ route }) => ({
            title: "",
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="Search"
          component={place.DetailsInfo}
          options={({ route }) => ({
            title: "",
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationRoute;

type TabNavParamList = {
  Home: undefined;
  Discover: undefined;
  Current: undefined;
};
type StackParamList = {
  Search:
    | { selectedPlace: PlacesData; allPlaces: Array<PlacesData> }
    | undefined;
  Root: undefined;
};
export type SearchParamList = {
  selectedPlace: PlacesData;
  allPlaces: Array<PlacesData>;
};
