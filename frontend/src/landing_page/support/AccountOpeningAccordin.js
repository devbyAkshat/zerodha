import React from "react";

function AccountOpeningAccordion() {
  return (
    <div className="accordion" id="supportAccordion">
      {/* Accordion Item 1 - Account Opening */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <i className="fas fa-plus-circle me-3 text-primary"></i>
            Account Opening
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Resident individual
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Minor
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Non Resident Indian (NRI)
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Company, Partnership, HUF and LLP
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Glossary
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Item 2 - Your Zerodha Account */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-user-circle me-3 text-primary"></i>
            Your Zerodha Account
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Login credentials
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Your Profile
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Account modification and segment addition
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • CMR & DP ID
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Nomination
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Item 3 - Kite */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <i className="fas fa-chart-bar me-3 text-primary"></i>
            Kite
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Trading FAQs
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Kite web
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Margins
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Product and order types
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Corporate actions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Item 4 - Funds */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <i className="fas fa-rupee-sign me-3 text-primary"></i>
            Funds
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Fund withdrawal
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Adding funds
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Adding bank accounts
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • eMandates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Item 5 - Console */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            <i className="fas fa-tv me-3 text-primary"></i>
            Console
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • IPO
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Portfolio
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Funds statement
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Profile
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Reports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Item 6 - Coin */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            <i className="fas fa-coins me-3 text-primary"></i>
            Coin
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#supportAccordion"
        >
          <div className="accordion-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Understanding mutual funds and Coin
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Coin app
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Coin web
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • Transactions and reports
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-primary text-decoration-none">
                  • National Pension Scheme (NPS)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOpeningAccordion;