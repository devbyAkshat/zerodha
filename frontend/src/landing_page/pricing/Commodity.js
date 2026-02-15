import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Commodity() {
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
            <Link 
              to="/pricing/currency" 
              className="text-decoration-none text-secondary fs-4 pb-2"
            >
              Currency
            </Link>
            <NavLink
              to="/pricing/commodity"
              className={({ isActive }) =>
                `text-decoration-none fs-4 pb-2 ${
                  isActive 
                    ? "text-primary border-bottom border-primary border-3" 
                    : "text-secondary"
                }`
              }
            >
              Commodity
            </NavLink>
          </div>

          {/* Pricing Table */}
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="fw-semibold"></th>
                  <th scope="col" className="fw-semibold">Commodity futures</th>
                  <th scope="col" className="fw-semibold">Commodity options</th>
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
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Transaction charges</td>
                  <td>
                    <div>MCX: 0.0021%</div>
                    <div>NSE: 0.0001%</div>
                  </td>
                  <td>
                    <div>MCX: 0.0418%</div>
                    <div>NSE: 0.001%</div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">GST</td>
                  <td colSpan="2">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td className="fw-semibold">SEBI charges</td>
                  <td>
                    <div>Agri: ₹1 / crore</div>
                    <div>Non-agri: ₹10 / crore</div>
                  </td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
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

export default Commodity;