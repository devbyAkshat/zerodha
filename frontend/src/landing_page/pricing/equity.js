import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Equity() {
  const location = useLocation();

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="d-flex gap-4 align-items-center border-bottom">
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `tab-link fs-2 p-3 ${isActive ? "text-secondary" : ""}`
              }
            >
              Equity
            </NavLink>
            <Link to="/pricing/Currency" className={`tab-link fs-2 p-3`}>
              Currency
            </Link>
            <Link to="/pricing/Commodity" className={`tab-link fs-2 p-3`}>
              Commodity
            </Link>
          </div>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
         <div className="col-1"></div>
         <div className="col-10">
            <div className="container mt-4">
  <div className="table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th></th>
          <th>Equity delivery</th>
          <th>Equity intraday</th>
          <th>F&O - Futures</th>
          <th>F&O - Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Brokerage</strong></td>
          <td>Zero Brokerage</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>0.03% or Rs. 20/executed order whichever is lower</td>
          <td>Flat Rs. 20 per executed order</td>
        </tr>
        <tr>
          <td><strong>STT/CTT</strong></td>
          <td>0.1% on buy & sell</td>
          <td>0.025% on the sell side</td>
          <td>0.02% on the sell side</td>
          <td>
            <ul className="mb-0">
              <li>0.125% of the intrinsic value on options that are bought and exercised</li>
              <li>0.1% on sell side (on premium)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td><strong>Transaction charges</strong></td>
          <td>
            NSE: 0.00297%<br />
            BSE: 0.00375%
          </td>
          <td>
            NSE: 0.00297%<br />
            BSE: 0.00375%
          </td>
          <td>
            NSE: 0.00173%<br />
            BSE: 0
          </td>
          <td>
            NSE: 0.03503% (on premium)<br />
            BSE: 0.0325% (on premium)
          </td>
        </tr>
        <tr>
          <td><strong>GST</strong></td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>
        <tr>
          <td><strong>SEBI charges</strong></td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
        </tr>
        <tr>
          <td><strong>Stamp charges</strong></td>
          <td>0.015% or ₹1500 / crore on buy side</td>
          <td>0.003% or ₹300 / crore on buy side</td>
          <td>0.002% or ₹200 / crore on buy side</td>
          <td>0.003% or ₹300 / crore on buy side</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

         </div>
          <div className="col-1"></div>
          <div className="row text-center mt-4  mb-5">
            <h4 className="fs-5"><a href="" style={{textDecoration:"none"}}>Calculate your costs upfront</a>  using our brokerage calculator</h4>
          </div>
      </div>
    </div>
  );
}

export default Equity;
