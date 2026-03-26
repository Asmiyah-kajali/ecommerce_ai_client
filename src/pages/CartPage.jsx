import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = ({ cart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart ({cart.length})</h2>

      {cart.map((item, i) => (
        <div className="cart-item" key={i}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      <h3 className="total">Total: ₹{total}</h3>

      <button className="pay-btn" onClick={() => navigate("/payment")}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CartPage;