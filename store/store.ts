import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./rootReducer";
import { mainSaga } from "./rootSagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(mainSaga);

export { store };
