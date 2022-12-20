import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import { CurrentUserProvider } from "./context/CurrentUserProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
