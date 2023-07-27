import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <div id="page-heading">
        <h2>BAG</h2>
        <hr />
      </div>
      <div id="page-section">
        <div id="cart-container">
          <p id="cart-items">
            YOUR ITEMS (<span></span>)
          </p>
          <div id="append-cart">{/* <!-- Append all cards here  --> */}</div>
        </div>
        <div id="order-summary">
          <p>ORDER SUMMARY</p>
          <div>
            <p>TOTAL</p>
            <hr />
            <div>
              <p>BAG TOTAL</p>
              <p>
                ₹<span id="bag-total">0.0</span>
              </p>
            </div>
            <div>
              <p>
                <b>TOTAL</b>
              </p>
              <p>
                <b>
                  ₹<span id="total">0.0</span>
                </b>
              </p>
            </div>
            <p style={{ textAlign: "center" }}>(Not including delivery)</p>
            <button id="checkout">SECURE CHECKOUT</button>
            <p>We accept:</p>
            <div>
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb708a05a/images/payment_methods/basket_amex.svg"
                alt=""
              />
              <img
                src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw1c8f39d6/images/payment_methods/apple_pay.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
