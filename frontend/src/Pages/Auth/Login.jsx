import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="top">
      <h2
        style={{ color: "#001f49", padding: "1rem 21rem" }}
        className="heading"
      >
        My account
      </h2>
      <div className="login">
        <div className="main">
          <div id="login-form">
            <label>Email address</label>
            <br />
            <input
              className="login-page-input"
              type="email"
              name="email"
              id="email"
              required
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="login-page-input"
              type="password"
              name="email"
              id="password"
              required
            />
            <br />
            <a href="#">Forgotten your password?</a>
            <br />
            <button className="login-page-btn" id="account-login">
              LOG IN
            </button>
          </div>
          <div
            id="register"
            style={{ paddingBlockStart: "0px", flexDirection: "column" }}
          >
            <h3
              style={{ color: "#001f49", paddingTop: "0px" }}
              className="heading"
            >
              New customers
            </h3>
            <p style={{ padding: "0px 20px" }}>
              Set up an account with us and you will be able to:
            </p>
            <div style={{ padding: "10px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwc2e07cd3/images/svg-icons/order_history.svg"
                  alt=""
                />
              </div>
              <p>Check order status</p>
            </div>
            <div style={{ padding: "0px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwd7e8876e/images/svg-icons/address_book.svg"
                  alt=""
                />
              </div>
              <p>Save multiple addresses to your address book</p>
            </div>
            <div style={{ padding: "10px 20px" }}>
              <div>
                <img
                  src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dwf3ccf7e4/images/svg-icons/personal_details.svg"
                  alt=""
                />
              </div>
              <p>Set your size and monogramming preferences</p>
            </div>
            <button className="login-page-btn" id="register-btn">
              CREATE AN ACCOUNT NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
