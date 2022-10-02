import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
