import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    

    if (user && user.email === form.email && user.password === form.password) {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="center-page" style={{background: "#1e1e2f"}}>
      <form className="card" onSubmit={handleSubmit}>
        <h2 style={{color: "white", textAlign: "center"}}>Login</h2>

        <input className="input" name="email" placeholder="Email" onChange={handleChange} />
        <input className="input" name="password" type="password" placeholder="Password" onChange={handleChange} />

        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;