import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./pages/CartContext"; // ✅ Import CartProvider
import "./index.css"; // ✅ Tailwind import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>  {/* ✅ Wrap your app with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

