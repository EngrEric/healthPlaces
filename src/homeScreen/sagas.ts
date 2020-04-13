import { put, all, takeLatest } from "redux-saga/effects";
import { ActionTypes, getPlaces, getError } from "./actions";

/**
 * @function*
 * Generator function that handles fetching of places data
 * @param
 */
function* placesWorker(): Generator<any, void, any> {
  // TODO: replace with google places api
  const response = yield fetch(
    `https://feeds.citibikenyc.com/stations/stations.json`
  );

  try {
    if (response.ok) {
      const data = yield response.json();
      yield put(getPlaces(data));
    } else {
      const data = yield response.json();
      yield put(getError(data));
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* placesSaga() {
  yield all([takeLatest(ActionTypes.REQUEST_PLACE, placesWorker)]);
}
