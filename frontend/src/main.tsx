import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MyThemeProvider from "./styles/MyThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>
);
