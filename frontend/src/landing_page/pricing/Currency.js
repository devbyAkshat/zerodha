import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Currency() {
  const location = useLocation();

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <div className="d-flex gap-4 align-items-center border-bottom">
           
            <Link to="/pricing" className={`tab-link fs-2 p-3`}>
              Equity
            </Link>
             <NavLink
              to="/pricing/currency"
              className={({ isActive }) =>
                `tab-link fs-2 p-3 ${isActive ? "text-secondary" : ""}`
              }
            >
              Currency
            </NavLink>
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
    <table className="table table-no-borders" style={{border: '1px solid #dee2e6'}}>
      <thead>
        <tr>
          <th></th>
          <th>Currency futures</th>
          <th>Currency options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Brokerage</strong></td>
          <td>0.03% or ₹ 20/executed order whichever is lower</td>
          <td>₹ 20/executed order</td>
        </tr>
        <tr>
          <td><strong>STT/CTT</strong></td>
          <td>No STT</td>
          <td>No STT</td>
        </tr>
        <tr>
          <td><strong>Transaction charges</strong></td>
          <td>
            NSE: 0.00035%<br />
            BSE: 0.00045%
          </td>
          <td>
            NSE: 0.0311%<br />
            BSE: 0.001%
          </td>
        </tr>
        <tr>
          <td><strong>GST</strong></td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>
        <tr>
          <td><strong>SEBI charges</strong></td>
          <td>₹10 / crore</td>
          <td>₹10 / crore</td>
        </tr>
        <tr>
          <td><strong>Stamp charges</strong></td>
          <td>0.0001% or ₹10 / crore on buy side</td>
          <td>0.0001% or ₹10 / crore on buy side</td>
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

export default Currency;
