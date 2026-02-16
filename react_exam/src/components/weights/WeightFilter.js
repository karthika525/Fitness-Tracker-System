import React, { useState } from "react";
import { useSelector } from "react-redux";

function WeightFilter() {
  const user = useSelector((s) => s.auth.user);
  const weights = useSelector((s) =>
    s.weights.list.filter((w) => w.userId === user?.email)
  );
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState([]);

  const handleFilter = () => {
    if (!from || !to) return alert("Please select both dates");
    const f = new Date(from);
    const t = new Date(to);
    const filtered = weights
      .filter((w) => new Date(w.date) >= f && new Date(w.date) <= t)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setResult(filtered);
  };

  const calcLoss = () => {
    if (result.length < 2) return 0;
    return (result[0].weight - result[result.length - 1].weight).toFixed(1);
  };

  return (
    <div className="mt-5 ">
    <h4>Check Weight Loss Between Dates</h4>
    <div className="d-flex gap-2 align-items-center inputsz mb-3">
    <input type="date"  value={from} onChange={(e) => setFrom(e.target.value)} />
    <input type="date"  value={to} onChange={(e) => setTo(e.target.value)} />
    <button className="btn btn-primary" onClick={handleFilter}>Calculate</button>
    </div>

    {result.length > 0 && (
    <div className="card">
    <ul className="list-group ">
    {result.map((r) => (
    <li key={r.id} className="list-group-item ">{r.date} — {r.weight} kg</li>
    ))}
    </ul>
    <div className="alert alert-info mt-3">Total Loss: {calcLoss()} kg</div>
    </div>
    )}
    </div>
  );
}

export default WeightFilter;

