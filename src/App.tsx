import React from "react";
import "./App.scss";
import AuthLayout from "./layout/AuthLayout";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AuthLayout />
      </div>
    </Provider>
  );
}

export default App;
