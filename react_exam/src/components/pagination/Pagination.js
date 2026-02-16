import React from "react";

function Pagination({ total, perPage, currentPage, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) pages.push(i);

  return (
  <div className="mt-3">
  {pages.map((n) => (<button key={n} className={`btn btn-sm ${n === currentPage ? "btn-primary" : "btn-light"} me-2`}
   onClick={() => onPageChange(n)}>{n}</button>))}
  </div>
  );
}
export default Pagination;
