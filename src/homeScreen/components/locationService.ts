import Geocoder from "react-native-geocoding";

const GeocoderLocator = new Geocoder();
GeocoderLocator.setApiKey("AIzaSyCGAZgj16GFtwI603dB-gzKpgP7AUFkyl8");

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => resolve(data),
      (err) => reject(err)
    );
  });
};

export const geocodeLocationByName = (
  locationName: string
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    GeocoderLocator.from(locationName)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};

export const geocodeLocationByCoords = (
  lat: number,
  long: number
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    GeocoderLocator.from(lat, long)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
};
