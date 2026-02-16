import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    navigate("/weights");
  };

  return (
  <div className="container mt-5 w-50 col-md-6">
  <div className="card">
  <h2 className="text-center">Login</h2>
  <form onSubmit={handleSubmit}  >
  <div className="mb-3">
  <label>Email:</label>
  <input type="email" className="form-control" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
  </div>
  <div className="mb-3">
  <label>Password:</label>
  <input type="password" className="form-control" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
  </div>
  <button className="btn btn-primary w-100">Login</button>
  <p className="pt-3">New User?<Link to="/register" className="text-decoration-none text-primary">Signup</Link></p>
  </form>
  </div>
  </div>
  );
}
export default Login;
