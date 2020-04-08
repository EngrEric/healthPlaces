import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { persistStore, persistReducer } from "redux-persist";
import { mainReducer } from "./rootReducer";
import { mainSaga } from "./rootSagas";
import AsyncStorage from "@react-native-community/async-storage";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   //   whitelist: ["login", "users", "blitz"]
// };
// const persistedReducer = persistReducer(persistConfig, mainReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(mainReducer, applyMiddleware(...middleware));

sagaMiddleware.run(mainSaga);

// const persistor = persistStore(store);
export { store };
