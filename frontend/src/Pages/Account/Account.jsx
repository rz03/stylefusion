import React from "react";
import "./account.css";

const Account = () => {
  return (
    <div>
      <div id="account-body">
        <div id="account-card">
          <div>
            {/* <img src="./images/account.png" alt="" /> */}
            <h2>MY ACCOUNT</h2>
            <p>
              Welcome, <span id="account-name"></span>
            </p>
          </div>
          <div>
            <a href="./order_history.html">
              {/* <img src="./images/order-history-1.png" alt="" /> */}
              <p>Order History</p>
            </a>
            <a href="">
              {/* <img src="./images/address-book.png" alt="" /> */}
              <p>Address Book</p>
            </a>
            <a href="">
              {/* <img src="./images/tape-measure.png" alt="" /> */}
              <p>My Sizes</p>
            </a>
            <a href="">
              {/* <img src="./images/resume.png" alt="" /> */}
              <p>Personal Details</p>
            </a>
          </div>
          <div>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
