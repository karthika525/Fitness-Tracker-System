import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWeight } from "../../redux/weightSlice";

function AddWeight({ user }) {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const timestamp = now.toLocaleTimeString();
    dispatch(addWeight({ 
      userId: user.email, 
      weight, 
      date,
      timestamp,
      created_at: now.toISOString()
    }));
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center inputsz">
      <input type="number" step="0.1" className="form-control-sm" placeholder="Enter weight here..." value={weight}
       onChange={(e) => setWeight(e.target.value)} required />
      <input type="date" className="form-control-sm" value={date} onChange={(e) => setDate(e.target.value)} />
      <button className="btn btn-primary ">Add</button>
    </form>
  );
}
export default AddWeight;
