import React from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";

import { store } from "./store/store";
import NavigationRoute from "./src/components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationRoute />
    </Provider>
  );
}

AppRegistry.registerComponent("health-places", () => App);
