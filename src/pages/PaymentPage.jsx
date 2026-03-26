import React, { useState } from "react";
import "./PaymentPage.css";

const PaymentPage = ({ cart }) => {
  const [paid, setPaid] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="payment-container">
      <div className="payment-box">

        {!paid ? (
          <>
            <h2>Payment</h2>
            <h3>Total: ₹{total}</h3>

            <button className="pay-btn" onClick={() => setPaid(true)}>
              Pay Now
            </button>
          </>
        ) : (
          <div className="success">
            <h2>✅ Payment Successful</h2>
            <p>Order placed successfully</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PaymentPage;   // 🔥 THIS IS CRITICAL