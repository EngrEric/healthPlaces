import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import homeComp from "../homeScreen";
import discover from "../discoverScreen";
import place from "../selectedPlaceScreen";
import { PlacesData } from "../homeScreen/actions";

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
          options={() => ({
            title: "",
            headerTransparent: true,
          })}
        />
        <Stack.Screen
          name="Search"
          component={place.DetailsInfo}
          options={() => ({
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
