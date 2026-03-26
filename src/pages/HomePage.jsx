 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products";
import "./HomePage.css";

const HomePage = ({ cart, setCart }) => {
  console.log(setCart);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const addToCart = (product) => {
  setCart(prev => [...prev, product]);
};

  // 🔥 FILTER LOGIC
 const filteredProducts = productsData.filter((p) => {
  return category === "all" || p.category === category;
});

  return (
    <div className="home-container">

      {/* 🔝 NAVBAR */}
      <div className="navbar">
        <h2 className="logo">ShopX</h2>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🛒 CART */}
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          🛒 <span>{cart.length}</span>
        </div>
      </div>

      {/* 🔥 CATEGORIES */}
     <div className="categories">
  <button onClick={() => setCategory("all")}>All</button>
  <button onClick={() => setCategory("shoes")}>Shoes</button>
  <button onClick={() => setCategory("phones")}>Phones</button>
  <button onClick={() => setCategory("headphones")}>Headphones</button>
  <button onClick={() => setCategory("dresses")}>Dresses</button>
</div>

      {/* 🛍 PRODUCTS */}
   <div className="product-grid">
  {filteredProducts.map((p) => (
    <div className="product-card" key={p.id}>
      <img src={p.image} alt={p.name} />
      <h4>{p.name}</h4>
      <p>₹{p.price}</p>

      <button onClick={() => addToCart(p)}>
        Add to Cart
      </button>
    </div>
  ))}
</div>
      
       

      {/* 🔥 ORDER BUTTON */}
      <button className="order-btn" onClick={() => navigate("/payment")}>
        Place Order
      </button>

    </div>
  );
};

export default HomePage;