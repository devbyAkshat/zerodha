import React from "react";

function Support() {
  return (
    <div className="p-4" style={{ backgroundColor: "rgb(232,232,232)" }}>
      <div className="d-flex justify-content-between align-items-center p-2">
        <h1 style={{ marginLeft: "100px" }}>Support Portal</h1>
        <button className="btn btn-primary" style={{ marginRight: "100px" }}>
          My tickets
        </button>
      </div>
      <div className="container mt-4">
        <div className="input-group input-group-lg">
          <span className="input-group-text bg-white">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
