import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
const { width, height } = Dimensions.get("window");

type DataType = {
  id: string;
  title: string;
};

const DiscoverCard: FC<DataType> = ({ id, title }): JSX.Element => {
  return (
    // implemented with Text and Button as children
    <Card
      image={require("../../../assets/dummy.png")}
      key={id}
      imageStyle={{ opacity: 0.2 }}
      containerStyle={styles.card}
    >
      <Text style={{ marginBottom: 10 }}>{id}</Text>
      <Button
        buttonStyle={{ backgroundColor: "#e9c0ee" }}
        icon={<Icon name="code" color="#ffffff" />}
        title="VIEW"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    width: width / 2,
  },
});
export default DiscoverCard;
