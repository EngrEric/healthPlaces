import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
const { width, height } = Dimensions.get("window");

type DataType = {
  id: string;
  title: string;
  image: any;
};

const DiscoverCard: FC<DataType> = ({ id, title, image }): JSX.Element => {
  return (
    // implemented with Text and Button as children
    <Card
      image={image}
      key={id}
      imageStyle={{ opacity: 0.2 }}
      containerStyle={styles.card}
    >
      <Text style={{ marginBottom: 10 }}>{id}</Text>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-around",
          height: 40,
          paddingBottom: 10,
        }}
      >
        <Button
          buttonStyle={{
            width: 40,
            height: 40,
            borderRadius: 30,
            paddingLeft: 5,
          }}
          icon={<Icon type="antdesign" name="like1" color="#ef0aff" />}
          type="clear"
        />

        <Button
          buttonStyle={{
            width: 40,
            height: 40,
            borderRadius: 30,
            paddingLeft: 5,
          }}
          icon={
            <Icon type="materialicons" name="rate-review" color="#ef0aff" />
          }
          type="clear"
        />
        <Button
          buttonStyle={{
            width: 40,
            height: 40,
            borderRadius: 30,
            paddingLeft: 5,
          }}
          icon={
            <Icon type="font-awesome" name="location-arrow" color="#ef0aff" />
          }
          type="clear"
        />
      </View>
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
    height: 250,
  },
});
export default DiscoverCard;
