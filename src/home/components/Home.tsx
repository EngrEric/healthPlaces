import React, { Props, useEffect } from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
// import MapView from "react-native-maps";

const Home: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  useEffect(() => {
    // make a call to retrieve the map data and store users location data
    //  to redux state
  });
  return (
    <View style={styles.container}>
      <Text>I am home</Text>
      <Text>I am home</Text>
      <Text>I am home</Text>
      <Text>I am home</Text>
      <Text>I am home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fed",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
