import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" , confirmPassword: "",});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(register(form));
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="container mt-5 w-50 col-md-6 ">
    <div className="card">
    <h2 className="text-center">Signup</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label>Name:</label>
    <input className="form-control" onChange={(e) => setForm({ ...form, name: e.target.value })} required />
    </div>
    <div className="mb-3">
    <label>Email:</label>
    <input type="email" className="form-control" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
    </div>
    <div className="mb-3">
    <label>Password:</label>
    <input type="password" className="form-control" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
    </div>
    <div className="mb-3">
    <label className="form-label">Confirm Password:</label>
    <input type="password" className="form-control" value={form.confirmPassword} onChange={(e) =>setForm({ ...form, confirmPassword: e.target.value })}
            required/>
    </div>
    <button className="btn btn-primary w-100">Register</button>
    <p className="pt-3">Already have an account ? <Link to="/login" className="text-decoration-none text-primary">Login</Link></p>
    </form>
    </div>
    </div>
  );
}
export default Register;
