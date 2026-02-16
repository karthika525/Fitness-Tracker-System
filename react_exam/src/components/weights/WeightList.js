import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWeight, editWeight } from "../../redux/weightSlice";
import Pagination from "../pagination/Pagination";
import AddWeight from "./AddWeight";
import WeightFilter from "./WeightFilter";

function WeightList() {
  const user = useSelector((state) => state.auth.user);
  const weights = useSelector((state) =>
    state.weights.list
      .filter((w) => w.userId === user?.email)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editVal, setEditVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const current = weights.slice(indexOfFirst, indexOfLast);

  const handleSave = (id) => {
    if (!editVal || isNaN(editVal)) return;
    dispatch(editWeight({ id, weight: parseFloat(editVal) }));
    setEditId(null);
  };

  return (
    <div className="container-sm mt-4 ">
    <div className="card p-3 shadow-sm">
    <h4 className="mb-3 text-center text-danger fw-bold">My Weight List</h4>
    {weights.length === 0 ? (
    <div className="alert alert-info text-center mt-3"> No weight records yet!</div>
        ) : (
          <>
            {current.map((w) => (
              <div 
                key={w.id} className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded"
                style={{ backgroundColor: "#f2f2f2ff"}}
              >{editId === w.id ? (<><input type="number" value={editVal} onChange={(e) => setEditVal(e.target.value)}
                      />
                <button className="btn btn-sm btn-outline-success bg-warning btnStyle" onClick={() => handleSave(w.id)}>Save</button>
                <button className="btn btn-sm btn-secondary text-light btnStyle" onClick={() => setEditId(null)}>Cancel</button>
              </>
                ) : (<><div >
              <strong className="text-primary btnStyle">
                {new Date(w.date).toLocaleDateString("en-US", { 
                  weekday: "long",
                  year: "numeric", 
                  month: "short",
                  day: "numeric"
                })}
              </strong>{" "}
              <span className="text-info fw-semibold">
                {new Date(w.date).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                })}&nbsp;&nbsp;
              </span>
              <span className="fw-bold text-dark">{w.weight} kg</span>
              </div>
              <div>
              <button className="btn btn-sm btn-outline-warning me-2 btnStyle bg-success" onClick={() => { setEditId(w.id); setEditVal(w.weight);}}>
              Edit</button>
              <button className="btn btn-sm btn-outline-light  btnStyle bg-danger" onClick={() => dispatch(deleteWeight(w.id))}>
              Delete</button>
              </div>
              </>
              )}
              </div>
            ))}
            <Pagination total={weights.length} perPage={perPage} currentPage={currentPage} onPageChange={setCurrentPage}/>
          </>
        )}
      </div>
      <div className="mb-4">
      <h4 className="text-light pt-3">Add New Weight</h4>
      <AddWeight user={user} />
     </div>
      <div className="mt-5"><WeightFilter /></div>
    </div>
  );
}

export default WeightList;
