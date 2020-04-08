import React from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import homeComp from "../home";

type TabNavParamList = {
  Home: undefined; //{ sort: 'latest' | 'top' } | undefined;
  Search: undefined; //{ userId: string };
  Discover: undefined;
};

type StackParamList = {
  Home: undefined;
  Search: undefined;
  Discover: undefined;
};

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabNavParamList>();

const Comp = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Settings!</Text>
  </View>
);

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
        name="Search"
        component={Comp}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Comp}
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
      {/* <Stack.Screen >...</Stack.Navigator> */}
      <BottomTabs />
    </NavigationContainer>
  );
};
export default NavigationRoute;
