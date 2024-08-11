import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { AuthProvider } from "./context/AuthContext";
import { FavProvider } from "./context/FavContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <FavProvider>
        <App />
      </FavProvider>
    </AuthProvider>
  </React.StrictMode>,
);
