import { ActionTypes, PlacesData } from "./actions";
type Action = {
  type: string;
  payload?: PlacesData;
  error?: any;
};

export type State = {
  loading: boolean;
  places?: PlacesData;
};
const initialState = {
  loading: true,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.REQUEST_PLACE:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PLACE:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case ActionTypes.ERROR:

    default:
      return {
        ...state,
      };
  }
};
