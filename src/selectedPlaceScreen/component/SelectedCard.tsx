import React, { FC } from "react";
import { Text, StyleSheet, Dimensions, Share } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

import { PlacesData } from "../../homeScreen/actions";

/**
 * Draws the text information about the given location
 */
const MoreInfoCard: FC<PlacesData> = ({ place }): JSX.Element => {
  /**
   * @function shares the information contained in this card
   */
  const onShare = async () => {
    try {
      await Share.share({
        message: place.stationName,
        url: "put url if any",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Card
      titleStyle={{ padding: 5 }}
      title={place.stationName}
      containerStyle={styles.card}
    >
      <Text style={{ textAlign: "justify", lineHeight: 19 }}>
        availableDocks: {place.availableDocks}
        {"\n"}
        city: {place.city}
        {"\n"}
        landMark: {place.landMark}
        {"\n"}
        latitude: {place.latitude}
        {"\n"}
        location: {place.location}
        {"\n"}
        stAddress1: {place.stAddress1}
        {"\n"}
        stAddress2: {place.stAddress2}
      </Text>
      <Button
        buttonStyle={styles.icons}
        onPress={onShare}
        icon={<Icon name="share" color="#fff" />}
        type="solid"
      ></Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    left: 1,
    position: "relative",
    backgroundColor: "#fff",
    width: Dimensions.get("window").width,
    alignSelf: "center",
    height: 350,
    paddingTop: 0,
  },
  icons: {
    alignSelf: "auto",
    marginTop: 10,
    backgroundColor: "#ef0aff",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    padding: 5,
  },
});
export default MoreInfoCard;
