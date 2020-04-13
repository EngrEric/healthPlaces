import React, { FC, useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { StackHeaderProps } from "@react-navigation/stack";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import { PlacesData } from "../../homeScreen/actions";
import MoreInfoCard from "./SelectedCard";
import SearchResult from "./SearchResult";

const { height } = Dimensions.get("window");

/**
 * @FC Full information for the selected location through the map callout
 */
const DetailInfo: FC<StackHeaderProps> = ({ navigation }) => {
  const getRoute = useRoute().params;
  const [query, setSearch] = useState<string>();
  const [isFocus, setFocus] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Array<PlacesData>>([]);

  /**
   * @function
   * @param query user search query
   * @returns void
   */
  const updateSearch = (query: string): void => {
    setSearch(query);
  };

  useEffect(() => {
    setSearchResult([]);
    // TODO: Replace with efficient search service
    if (isFocus && query?.length > 3) {
      const foundItems =
        getRoute &&
        getRoute.allPlaces?.filter(({ stationName }) => {
          const queryLowCase = query?.toLocaleLowerCase();
          const stationNameLow = stationName.toLocaleLowerCase();
          return stationNameLow.match(`${queryLowCase}`);
        });
      if (foundItems.length > 0) {
        setSearchResult(foundItems);
      }
    }
  }, [query]);

  return (
    <View style={styles.content}>
      {navigation.setOptions({
        headerRight: () => (
          <SearchBar
            placeholder="Search Places.."
            onChangeText={updateSearch}
            value={query}
            onFocus={() => setFocus(true)}
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInput}
          />
        ),
        headerRightContainerStyle: { marginBottom: 5, marginTop: 5 },
      })}
      {isFocus ? (
        <SearchResult
          data={searchResult}
          setFocus={() => setFocus(!isFocus)}
          navigate={(place) =>
            navigation.navigate("Search", {
              selectedPlace: place,
            })
          }
        />
      ) : (
        <View style={styles.mainContent}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 20,
            }}
          >
            {getRoute?.selectedPlace.stationName.substr(0, 30)}
            {getRoute?.selectedPlace.stationName.length > 30 ? "..." : " "}
          </Text>
          <Image
            defaultSource={require("../../../assets/dummy.png")}
            source={require("../../../assets/tool1.jpg")}
            style={styles.image}
          />
          {<MoreInfoCard place={getRoute?.selectedPlace} />}
        </View>
      )}
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: "#e9c0ee",
  },
  searchContainer: {
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    width: Dimensions.get("window").width - 50,
    alignSelf: "flex-end",
  },

  searchInput: {
    backgroundColor: "#fff",
  },
  image: {
    height: height - 400,
    alignSelf: "center",
    marginBottom: 10,
  },
  mainContent: {
    marginTop: 60,
    maxHeight: 700,
  },
  search: {
    flex: 1,
    marginTop: 100,
    backgroundColor: "white",
    margin: 5,
    padding: 5,
    maxHeight: 600,
  },
});
