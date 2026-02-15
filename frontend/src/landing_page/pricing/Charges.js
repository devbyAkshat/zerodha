import React from "react";

function Charges() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 col-md-11 mx-auto">
          
          {/* Account Opening Charges */}
          <section className="mb-5">
            <h3 className="fs-4 fw-semibold mb-4">Charges for account opening</h3>
            <div className="border rounded overflow-hidden">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="fw-semibold">Type of account</th>
                    <th scope="col" className="text-end fw-semibold">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Online account</td>
                    <td className="text-end">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Offline account</td>
                    <td className="text-end">
                      <span className="badge bg-success">FREE</span>
                    </td>
                  </tr>
                  <tr>
                    <td>NRI account (offline only)</td>
                    <td className="text-end">₹500</td>
                  </tr>
                  <tr>
                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                    <td className="text-end">₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Demat AMC */}
          <section className="mb-5">
            <h3 className="fs-4 fw-semibold mb-4">Demat AMC (Annual Maintenance Charge)</h3>
            <div className="border rounded overflow-hidden">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="fw-semibold">Value of holdings</th>
                    <th scope="col" className="fw-semibold">AMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Up to ₹4 lakh</td>
                    <td>
                      <span className="badge bg-success">FREE*</span>
                    </td>
                  </tr>
                  <tr>
                    <td>₹4 lakh - ₹10 lakh</td>
                    <td>₹100 per year, charged quarterly*</td>
                  </tr>
                  <tr>
                    <td>Above ₹10 lakh</td>
                    <td>₹300 per year, charged quarterly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="small text-muted mt-3">
              * Lower AMC is applicable only if the account qualifies as a Basic
              Services Demat Account (BSDA). BSDA account holders cannot hold more
              than one demat account. To learn more about BSDA,{" "}
              <a href="#" className="text-primary text-decoration-none">
                click here
              </a>.
            </p>
          </section>

          {/* Value Added Services */}
          <section className="mb-5">
            <h3 className="fs-4 fw-semibold mb-4">Charges for optional value added services</h3>
            <div className="border rounded overflow-hidden">
              <table className="table table-hover mb-0 align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col" className="fw-semibold">Service</th>
                    <th scope="col" className="fw-semibold">Billing Frequency</th>
                    <th scope="col" className="fw-semibold">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                  </tr>
                  <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                  </tr>
                  <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 500 | Personal: Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Charges Explained */}
          <section className="mt-5 pt-4">
            <h3 className="fs-4 fw-semibold mb-4">Charges explained</h3>

            <div className="row g-4">
              {/* LEFT COLUMN */}
              <div className="col-md-6">
                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Securities/Commodities transaction tax</h6>
                  <p className="text-muted small mb-0">
                    Tax by the government when transacting on the exchanges.
                    Charged as above on both buy and sell sides when trading
                    equity delivery. Charged only on selling side when trading
                    intraday or F&O.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Transaction/Turnover Charges</h6>
                  <p className="text-muted small mb-0">
                    Charged by exchanges (NSE, BSE, MCX) on the value of your
                    transactions.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Call & trade</h6>
                  <p className="text-muted small mb-0">
                    Additional charges of ₹50 per order for orders placed through
                    a dealer.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Stamp charges</h6>
                  <p className="text-muted small mb-0">
                    Stamp charges by the Government of India as per the Indian
                    Stamp Act.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">NRI brokerage charges</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li className="mb-1">
                      For a non-PIS account, 0.5% or ₹50 per executed order.
                    </li>
                    <li className="mb-1">For a PIS account, 0.5% or ₹200 per executed order.</li>
                    <li>₹500 + GST as yearly AMC charges.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Account with debit balance</h6>
                  <p className="text-muted small mb-0">
                    If the account is in debit balance, any order placed will be
                    charged ₹40 per executed order.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">IPFT by NSE</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li className="mb-1">Equity & Futures – ₹10 per crore + GST.</li>
                    <li>Options – ₹50 per crore + GST traded value.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Margin Trading Facility (MTF)</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li className="mb-1">MTF interest 0.04% per day.</li>
                    <li className="mb-1">MTF brokerage 0.3% or ₹20/executed order.</li>
                    <li>MTF pledge charge ₹15 + GST.</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-md-6">
                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">GST</h6>
                  <p className="text-muted small mb-0">
                    Tax levied by the government on services rendered. 18% of
                    brokerage + transaction charges.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">SEBI charges</h6>
                  <p className="text-muted small mb-0">
                    Charged at ₹10 per crore by SEBI for regulating the markets.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">DP (Depository participant) charges</h6>
                  <p className="text-muted small mb-0">
                    ₹15.34 per scrip charged on the trading account ledger when
                    stocks are sold.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Pledging charges</h6>
                  <p className="text-muted small mb-0">
                    ₹30 + GST per pledge request per ISIN.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">AMC (Account maintenance charges)</h6>
                  <p className="text-muted small mb-0">
                    For BSDA demat account: Zero charges if holding value is less
                    than ₹4,00,000.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Corporate action order charges</h6>
                  <p className="text-muted small mb-0">
                    ₹20 plus GST will be charged for OFS / buyback / takeover
                    orders.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Off-market transfer charges</h6>
                  <p className="text-muted small mb-0">₹25 per transaction.</p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Physical CMR request</h6>
                  <p className="text-muted small mb-0">
                    First request is free. Courier + GST for subsequent requests.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Payment gateway charges</h6>
                  <p className="text-muted small mb-0">
                    ₹9 + GST (Not levied on UPI).
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Delayed Payment Charges</h6>
                  <p className="text-muted small mb-0">
                    Interest levied at 18% a year on debit balance.
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Trading using 3-in-1 account</h6>
                  <ul className="text-muted small mb-0 ps-3">
                    <li className="mb-1">Delivery & MTF brokerage: 0.5% per order.</li>
                    <li>Intraday brokerage: 0.05% per order.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-5 pt-4 border-top">
              <p className="small text-muted">
                <strong>Disclaimer</strong><br />
                For Delivery based trades, a minimum of ₹0.01 will be charged per
                contract note. Clients who opt to receive physical contract notes
                will be charged ₹20 per contract note plus courier charges.
                Brokerage will not exceed the rates specified by SEBI and the
                exchanges. All statutory and regulatory charges will be levied at
                actuals. Brokerage is also charged on expired, exercised, and
                assigned options contracts. Free investments are available only
                for our retail individual clients. Companies, Partnerships,
                Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as
                delivery brokerage. A brokerage of 0.25% of the contract value
                will be charged for contracts where physical delivery happens. For
                netted off positions in physically settled contracts, a brokerage
                of 0.1% will be charged.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Charges;