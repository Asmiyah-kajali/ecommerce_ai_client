import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import HomePage from "./pages/HomePage";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

<Route path="/home" element={<HomePage cart={cart} setCart={setCart} />} />

        {/* 👇 PASS CART + COUNT */}
        <Route path="/products" element={
          <ProductsPage setCart={setCart} cart={cart} />
        } />

        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/payment" element={<PaymentPage cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;