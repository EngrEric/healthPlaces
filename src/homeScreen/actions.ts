export enum ActionTypes {
  GET_PLACE = "GET_PLACE",
  REQUEST_PLACE = "REQUEST_PLACE",
  ERROR = "ERROR",
}

export type PlacesData = {
  altitude: string;
  availableBikes: number;
  availableDocks: number;
  city: string;
  id: number;
  landMark: string;
  lastCommunicationTime: string;
  latitude: number;
  location: string;
  longitude: number;
  postalCode: string;
  stAddress1: string;
  stAddress2: string;
  stationName: string;
  statusKey: number;
  statusValue: string;
  testStation: boolean;
  totalDocks: number;
};

export const requestPlaces = () => {
  return {
    type: ActionTypes.REQUEST_PLACE,
  };
};

export const getPlaces = (payload: Array<PlacesData>) => {
  return {
    type: ActionTypes.GET_PLACE,
    payload,
  };
};

export const getError = (error: any) => {
  return {
    type: ActionTypes.ERROR,
    error,
  };
};
