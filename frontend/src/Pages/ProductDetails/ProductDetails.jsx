import React, { useEffect, useState } from "react";
import "./productdetails.css";
import { useParams } from "react-router";
const ProductDetails = () => {
  const { category, id } = useParams();
  // console.log(id, category, "from details");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [productData, setProductData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    const baseServerURL = "http://localhost:5000";

    async function fetchData() {
      try {
        const response = await fetch(
          `${baseServerURL}/products/${category}/${id}`
        );
        const responseData = await response.json();
        setProductData(responseData.data);
        setName(responseData.data.name);
        setImg(responseData.data.img);
        setPrice(responseData.data.price);
        console.log(responseData.data);
      } catch (err) {
        console.log("Error :", err);
      }
    }
    fetchData();
  }, []);

  const addToCart = () => {
    if (isNaN(quantity) || quantity <= 0) {
      // Invalid quantity, do not add to cart
      return;
    }

    const cartItem = {
      prod_id: productData._id,
      name,
      price,
      size: selectedSize,
      quantity,
      img,
    };
    const cart = JSON.parse(localStorage.getItem("CART")) || [];
    cart.push(cartItem);
    console.log(cart, "cart");
    localStorage.setItem("CART", JSON.stringify(cart));

    alert("Item added to cart!");
  };

  return (
    <>
      <div id="prod-container">
        {productData && (
          <>
            <div>
              <img src={productData.img} alt={productData.name} />
            </div>
            <div>
              <img src={productData.img} alt={productData.name} />
            </div>
            <div>
              <p id="prod-name">{productData.name}</p>
              <p id="prod-price">
                <b>₹{productData.price}</b>
              </p>
              <br />
              <p className="prod-offer">BUY 2 SHIRTS SAVE 10%</p>
              <p className="prod-offer">BUY 3 SHIRTS SAVE 15%</p>
              <p className="prod-offer">BUY 4 SHIRTS SAVE 20%</p>
              <br />
              <hr />
              {/* <p id="prod-details">{productData.details}</p> */}
              <br />
              <label htmlFor="prod-size">
                <b>SELECT SIZE</b>
              </label>
              <select
                name="prod-size"
                id="prod-size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
              </select>
              <br />
              <br />
              <label htmlFor="prod-qty">
                <b>SELECT QUANTITY</b>
              </label>
              <select
                name="prod-qty"
                id="prod-qty"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <button id="add_to_cart" onClick={addToCart}>
                ADD TO BAG
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
