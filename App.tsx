import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { AppRegistry } from "react-native";

import { store } from "./store/store";
import NavigationRoute from "./src/components/Navigation";

export default function App() {
  // const [isReady, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const whenComponeMounts = async () => {

  //     setLoading(!isReady);
  //   };
  //   whenComponeMounts();
  // }, [isReady]);

  return (
    <Provider store={store}>
      <NavigationRoute />
    </Provider>
  );
}

AppRegistry.registerComponent("my_key_here", () => App);
