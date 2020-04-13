import React, { FC } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import Card from "./Card";
import home from "../../homeScreen";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";

const { width, height } = Dimensions.get("window");
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Discover: FC<BottomTabBarProps> = (props): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e9c0ee" barStyle="dark-content" />
      {/* replace image with map view component and pass appropriate props
      users should view health places as from the cards as they drag the map
       */}

      <View style={styles.map}>
        <home.Home {...props} />
      </View>
      <Text
        style={{
          fontSize: 20,
          padding: 5,
          color: "#fff",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Health facilities close to you!
      </Text>
      <View
        style={{
          width: width - 5,
          maxHeight: height - 280,
          paddingLeft: 5,
        }}
      >
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: "#e9c0ee",
  },
  //replace with map
  map: {
    flex: 5,
    backgroundColor: "#f9c2ff",
    marginVertical: 5,
    marginHorizontal: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width - 10,
  },
});

export default Discover;
