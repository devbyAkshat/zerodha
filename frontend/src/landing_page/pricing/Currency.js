import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Currency() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-10 col-md-11 mx-auto">
          {/* Tab Navigation */}
          <div className="d-flex gap-4 align-items-center border-bottom pb-2 mb-4">
            <Link 
              to="/pricing" 
              className="text-decoration-none text-secondary fs-4 pb-2"
            >
              Equity
            </Link>
            <NavLink
              to="/pricing/currency"
              className={({ isActive }) =>
                `text-decoration-none fs-4 pb-2 ${
                  isActive 
                    ? "text-primary border-bottom border-primary border-3" 
                    : "text-secondary"
                }`
              }
            >
              Currency
            </NavLink>
            <Link 
              to="/pricing/commodity" 
              className="text-decoration-none text-secondary fs-4 pb-2"
            >
              Commodity
            </Link>
          </div>

          {/* Pricing Table */}
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="fw-semibold"></th>
                  <th scope="col" className="fw-semibold">Currency futures</th>
                  <th scope="col" className="fw-semibold">Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-semibold">Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>₹20/executed order</td>
                </tr>
                <tr>
                  <td className="fw-semibold">STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Transaction charges</td>
                  <td>
                    <div>NSE: 0.00035%</div>
                    <div>BSE: 0.00045%</div>
                  </td>
                  <td>
                    <div>NSE: 0.0311%</div>
                    <div>BSE: 0.001%</div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td className="fw-semibold">SEBI charges</td>
                  <td colSpan="2">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Stamp charges</td>
                  <td colSpan="2">0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Calculator Link */}
          <div className="text-center mt-5 mb-4">
            <p className="fs-5">
              <a 
                href="#" 
                className="text-decoration-none text-primary"
              >
                Calculate your costs upfront
              </a> using our brokerage calculator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;