import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/todo";
import { NavigationProvider } from "./context/navigationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <Provider>
        <App />
      </Provider>
    </NavigationProvider>
  </React.StrictMode>
);
