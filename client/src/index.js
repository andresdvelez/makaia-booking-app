import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/authContext";
import "./index.css";
import AppRouter from "./router/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <AppRouter />
  </AuthContextProvider>
);
