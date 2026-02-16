import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeight, editWeight, clearError } from "../../redux/weightSlice";

function WeightForm({ user, editData, onCancel }) {
  const [weight, setWeight] = useState(editData?.weight || "");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.weights.error);
  useEffect(() => {
  return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight) return alert("Please enter a weight");
    if (editData) {
      dispatch(editWeight({ id: editData.id, weight: parseFloat(weight) }));
      onCancel?.();
    } else {
      dispatch(addWeight({ userId: user.email, weight }));
      setWeight("");
    }
  };

  return (
    <div>
      {error && (
        <div className="alert alert-danger mb-2 p-2" role="alert">
        {error}
        </div>
      )}
    <div className="d-flex align-items-center gap-2">
    <input type="number" className="form-control-sm" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
    <button className="btn btn-primary btnStyle " onClick={handleSubmit}>{editData ? "Update" : "Add"}</button>
    {editData && (
    <button className="btn btn-outline-secondary btnStyle" onClick={onCancel}>Cancel</button>
    )}
    </div>
    </div>
  );
}

export default WeightForm;
