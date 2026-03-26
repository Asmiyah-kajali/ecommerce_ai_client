import React, { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import "./ProductsPage.css";

const ProductsPage = ({ setCart, cart }) => {
  const navigate = useNavigate();
  const [addedId, setAddedId] = useState(null);

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);

    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 500);
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Products ({cart.length})</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div
            className={`product-card ${addedId === p.id ? "added" : ""}`}
            key={p.id}
          >
            {/* IMAGE */}
           <img src={p.image} alt={p.name} className="product-img" />

<h3>{p.name}</h3>
<p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button className="cart-btn" onClick={() => navigate("/cart")}>
        Go to Cart ({cart.length})
      </button>
    </div>
  );
};

export default ProductsPage;