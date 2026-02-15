import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Equity() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-10 col-md-11 mx-auto">
          {/* Tab Navigation */}
          <div className="d-flex gap-4 align-items-center border-bottom pb-2 mb-4">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-decoration-none fs-4 pb-2 ${
                  isActive 
                    ? "text-primary border-bottom border-primary border-3" 
                    : "text-secondary"
                }`
              }
            >
              Equity
            </NavLink>
            <Link 
              to="/pricing/Currency" 
              className="text-decoration-none text-secondary fs-4 pb-2"
            >
              Currency
            </Link>
            <Link 
              to="/pricing/Commodity" 
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
                  <th scope="col" className="fw-semibold">Equity delivery</th>
                  <th scope="col" className="fw-semibold">Equity intraday</th>
                  <th scope="col" className="fw-semibold">F&O - Futures</th>
                  <th scope="col" className="fw-semibold">F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-semibold">Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>Flat ₹20 per executed order</td>
                </tr>
                <tr>
                  <td className="fw-semibold">STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.02% on the sell side</td>
                  <td>
                    <ul className="mb-0 ps-3">
                      <li className="mb-1">0.125% of the intrinsic value on options that are bought and exercised</li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">Transaction charges</td>
                  <td>
                    <div>NSE: 0.00297%</div>
                    <div>BSE: 0.00375%</div>
                  </td>
                  <td>
                    <div>NSE: 0.00297%</div>
                    <div>BSE: 0.00375%</div>
                  </td>
                  <td>
                    <div>NSE: 0.00173%</div>
                    <div>BSE: 0</div>
                  </td>
                  <td>
                    <div>NSE: 0.03503% (on premium)</div>
                    <div>BSE: 0.0325% (on premium)</div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-semibold">GST</td>
                  <td colSpan="4">18% on (brokerage + SEBI charges + transaction charges)</td>
                </tr>
                <tr>
                  <td className="fw-semibold">SEBI charges</td>
                  <td colSpan="4">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="fw-semibold">Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
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

export default Equity;