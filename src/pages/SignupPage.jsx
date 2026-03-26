import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "", email: "", password: "", phone: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <div className="center-page" style={{background: "#2c2c54"}}>
      <form className="card" onSubmit={handleSubmit}>
        <h2 style={{color: "white", textAlign: "center"}}>Sign Up</h2>

        <input className="input" name="name" placeholder="Full Name" onChange={handleChange} />
        <input className="input" name="email" placeholder="Email" onChange={handleChange} />
        <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange} />

        <button className="btn" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;