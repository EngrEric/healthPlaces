import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Region, Marker } from "react-native-maps";
import { PlacesData } from "../actions";

type Props = {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  markers: any;
  setNewRegion?: (region: Region) => void;
  handleOnCalloutPress: (place: PlacesData) => any;
};

const HomeMapView: React.FC<Props> = ({
  region,
  markers,
  handleOnCalloutPress,
}) => {
  return (
    <MapView
      style={styles.container}
      initialRegion={region}
      showsUserLocation={true}
      showsBuildings={true}
      loadingEnabled={markers.loading}
      loadingIndicatorColor={"#fed"}
      // onRegionChange={(region) => setNewRegion(region)}
    >
      {!markers.loading &&
        markers.stationBeanList.map((marker, index) => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
            <Marker
              key={index}
              coordinate={coords}
              title={marker.stationName}
              description={metadata}
              icon={require("../../../assets/calloutIcon.png")}
              onCalloutPress={() => handleOnCalloutPress(marker)}
            />
          );
        })}
    </MapView>
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

export default HomeMapView;
