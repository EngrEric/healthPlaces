import React, { FC } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { PlacesData } from "../../home/actions";

/**
 * component that displays the search result
 * @returns JSX search results
 */
const SearchResult: FC<Props> = ({ data, setFocus, navigate }) => {
  const handlePress = (place: PlacesData) => {
    setFocus(false);
    navigate(place);
  };
  return (
    <View style={styles.search}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 20,
            }}
            onPress={() => handlePress(item)}
          >
            {data.length > 0 ? (
              <View style={styles.results}>
                <Image
                  source={require("../../../assets/tool1.jpg")}
                  style={styles.smallImage}
                />
                <Text>{item.stationName}</Text>
              </View>
            ) : (
              <Text
                style={{
                  flex: 1,
                  alignSelf: "center",
                  fontSize: 50,
                  color: "black",
                }}
              >
                No result found
              </Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    maxHeight: 600,
  },
  smallImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  results: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
});

type Props = {
  data: Array<PlacesData>;
  navigate: (place: PlacesData) => void;
  setFocus: (isFocus: boolean) => void;
};
