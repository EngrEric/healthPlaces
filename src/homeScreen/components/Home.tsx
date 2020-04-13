import React, { useEffect } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import HomeMapView from "./MapView";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ActionTypes, PlacesData } from "../actions";
import { State } from "../reducer";

const Home: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const region = {
    latitude: 40.76727216,
    longitude: -73.99392888,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const dispatch = useDispatch();
  const { home } = useSelector<RootState>(
    ({ home }) => ({
      home: home,
    }),
    shallowEqual
  );

  const handleOnCalloutPress = (place: PlacesData) => {
    navigation.navigate("Search", {
      selectedPlace: place,
      allPlaces: home.stationBeanList,
    });
  };
  useEffect(() => {
    /*
    function getInitialLoaction() {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          console.log(region, ";mmmmmmm");
          !shallowEqual(
            coords.latitude + 0.3 || coords.latitude - 0.3,
            region.latitude
          ) &&
            setRegion({
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
        },
        (err) => console.log(err)
      );
    }
    getInitialLoaction();
    */
    dispatch({ type: ActionTypes.REQUEST_PLACE });
  }, []);

  return (
    <HomeMapView
      region={region}
      markers={home}
      handleOnCalloutPress={(place) => handleOnCalloutPress(place)}
    />
  );
};

type RootState = {
  home: State;
};

export default Home;
