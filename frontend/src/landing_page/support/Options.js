import React from "react";
import AccountOpeningAccordin from "./AccountOpeningAccordin";

function Options() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-8">
          <AccountOpeningAccordin />
        </div>
        <div className="col-4">
          <div
            style={{
              borderLeft: "4px solid orange",
              paddingLeft: "20px",
              backgroundColor: "#FFF8F0",
              padding: "20px",
            }}
          >
            <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
              <li style={{ marginBottom: "15px" }}>
                <a
                  href="#"
                  style={{
                    color: "#0066FF",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  Surveillance measure on scrips - February 2026
                </a>
              </li>
              <li style={{ marginBottom: "15px" }}>
                <a
                  href="#"
                  style={{
                    color: "#0066FF",
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                >
                  Current Buybacks - February 2026
                </a>
              </li>
            </ul>
          </div>
           <div className="card mt-4 border" style={{ backgroundColor: "#f8f9fa", border: "none" }}>
      <div className="card-body p-4 border">
        <h5 className="card-title mb-4" style={{ fontSize: "20px", fontWeight: "500", color: "#333" }}>
          Quick links
        </h5>
        <ul className="list-unstyled">
          <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #dee2e6" }}>
            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "16px" }}>
              1. Track account opening
            </a>
          </li>
          <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #dee2e6" }}>
            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "16px" }}>
              2. Track segment activation
            </a>
          </li>
          <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #dee2e6" }}>
            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "16px" }}>
              3. Intraday margins
            </a>
          </li>
          <li className="mb-3 pb-3" style={{ borderBottom: "1px solid #dee2e6" }}>
            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "16px" }}>
              4. Kite user manual
            </a>
          </li>
          <li className="mb-3">
            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "16px" }}>
              5. Learn how to create a ticket
            </a>
          </li>
        </ul>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
