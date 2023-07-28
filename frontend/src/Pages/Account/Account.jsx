import React, { useEffect, useState } from "react";
import "./account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const url = "http://localhost:5000";
  let token = localStorage.getItem("token");
  console.log(token);

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);

  const handleUserDetails = async () => {
    try {
      const res = await fetch(`${url}/users/details`, {
        headers: {
          authorization: token,
        },
      });
      const user = await res.json();
      console.log(user);
      if (user) {
        setUserName(user.firstName);
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleUserDetails();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  useEffect(() => {
    const handleOrderHistory = async () => {
      try {
        const res = await fetch(`${url}/orders`, {
          headers: {
            authorization: token,
          },
        });
        const data = await res.json();
        console.log("fetching data");
        console.log(data);
        setProductsData(data);
      } catch (error) {
        console.log(error);
      }
      // console.log("History");
    };

    handleOrderHistory();
  }, []);

  return (
    <div>
      <div id="account-body">
        <div id="account-card">
          <div>
            {/* <img src="./images/account.png" alt="" /> */}
            <h2>MY ACCOUNT</h2>
            <p>Welcome, {userName}</p>
          </div>
          <div>
            <button href="">
              {/* <img src="./images/order-history-1.png" alt="" /> */}
              <p>Order History</p>
            </button>
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
            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
        <div>
          {productsData.map((order) => {
            <ul>
              {order.products.map((product) => {
                <div>
                  <p>Product ID: {product[0]}</p>
                  <p>Quantity : {product[1]}</p>
                </div>;
              })}
            </ul>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
