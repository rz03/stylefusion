import React from "react";
import "./homepage.css";
// import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  // const sliderImages = [
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw6f739df5/merchAssets/SS23/Homepage/hero-carousel/hc-059.jpg",
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw46ad7926/merchAssets/SS23/Homepage/hero-carousel/hc-069.jpg",
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw4953505b/merchAssets/SS23/Homepage/hero-carousel/hc-067.jpg",
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw64d38fd3/merchAssets/SS23/Homepage/hero-carousel/hc-047.jpg",
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe0525381/merchAssets/SS23/Homepage/hero-carousel/hc-068.jpg",
  //   "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw86528854/merchAssets/SS23/Homepage/hero-carousel/hc-070.jpg",
  // ];
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const navigate = useNavigate();
  return (
    <div>
      <div id="video-container">
        <div>
          <h1 style={{ color: "white", fontSize: "50px" }}>Race to the Pool</h1>
          <h2 style={{ color: "#ffd000", fontSize: "30px" }}>
            BUY 4 SHIRTS OR POLOS <br /> GET 20% OFF
          </h2>
          <div>
            <button
              onClick={() => {
                navigate("/products/polos");
              }}
            >
              SHOP SUMMER
            </button>
            <button
              onClick={() => {
                navigate("/products/shirts");
              }}
            >
              SHOP SHIRTS
            </button>
          </div>
        </div>
        <video autoPlay muted loop>
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/834812875/rendition/720p/file.mp4?loc=external&signature=5ceaadc3d0e97d46904e15d884e6b53b5eb634e2ea45db782ef47bf8563c2dec"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="slider1">
        <a
          onClick={() => {
            navigate("/products/polos");
          }}
        >
          <h4>POLOS</h4>
          <h3>Buy 4, Save 20%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/trousers");
          }}
        >
          <h4>TROUSERS & SHORTS</h4>
          <h3>Buy 2, Save 20%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/shirts");
          }}
        >
          <h4>LINEN COLLECTION</h4>
          <h3>Lightweight & breathable</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/shoes");
          }}
        >
          <h4>Summer Shoes</h4>
          <h3>Walking on Sunshine</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/shirts");
          }}
        >
          <h4>CASUAL SHIRTS</h4>
          <h3>Buy 4, Save 20%</h3>
        </a>
        <a
          onClick={() => {
            navigate("/products/suits");
          }}
        >
          <h4>BLAZERS</h4>
          <h3>Good to Go</h3>
        </a>
      </div>
      <div id="container1">
        <div>
          <h1 style={{ color: "#ceb45c" }}>NEW SHIRT OF THE SEASON</h1>
          <p className="sub-heading">The Clifton Weave</p>
          <p className="details">
            Make room in your wardrobe for our new and exclusive Clifton Weave.
            Inspired by our founder Nick's digs at Bristol University, the local
            area - Clifton Village - is where Charles Tyrwhitt was born. Whether
            you want to dress it up or down, find out what makes the Clifton our
            hero shirt this season.
          </p>
          <div id="image">
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe953e761/merchAssets/content/USP%20Icons/Cotton_100_White.svg"
              alt=""
            />
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe298968b/merchAssets/content/USP%20Icons/non-iron-white.svg"
              alt=""
            />
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwe410c02a/merchAssets/content/USP%20Icons/three-fit-white.svg"
              alt=""
            />
          </div>
          <button>
            <a
              onClick={() => {
                navigate("/products/shirts");
              }}
            >
              SHOP THE COLLECTION
            </a>
          </button>
        </div>
      </div>

      <div id="grid2x2">
        <div>
          <img
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw850bb5db/merchAssets/SS23/Homepage/Editorial/editorial-ss23-desktop-01.jpg"
            alt=""
          />
          <div>
            <h3>Root to Success</h3>
            <p>
              Alongside sporting our new summer collection, Joe Root (England's
              all-time leading run scorer might we add) will be keen to add to
              his run tally as a summer of action packed cricket is about to
              begin
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
        <div>
          <img
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwf3fd574b/merchAssets/SS23/Homepage/Editorial/hp5-wedding-desktop.jpg"
            alt=""
          />
          <div>
            <h3>Wedding Style Guide</h3>
            <p>
              Our definite wedding style guide gives expert insight into
              precisely what to wear this season, no matter your role on the day
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
        <div>
          <img
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwd7179af2/merchAssets/SS23/Homepage/Editorial/golf-desktop.jpg"
            alt=""
          />
          <div>
            <h3>Golf Collection</h3>
            <p>
              Give your swing some extra power in our slick golf attire.
              <br />
              Our range of vertasile separates has been designed to effortlessly
              take you from the course to the clubhouse
            </p>
            <button>DISCOVER MORE</button>
          </div>
        </div>
        <div>
          <img
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7a512650/merchAssets/SS23/Homepage/Editorial/hp1-editorial-holiday-desktop.jpg"
            alt=""
          />
          <div>
            <h3>How to Pack for a Holiday</h3>
            <p>
              Read our expert guide on packing a perfectly curated collection of
              holiday clothes, from your shirts to your swim shorts
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>

      <div id="ex-info">
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw50a0e485/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <h4>CARBON NEUTRAL</h4>
          <p>
            We are proud to be Carbon Neutral with <br /> Planet Mark
          </p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw50a0e485/images/icons-large/express-delivery.svg"
              alt=""
            />
          </div>
          <h4>WORLDWIDE DELIVERY</h4>
          <p>Tracked delivery to over 200 countries</p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw92b7bf99/images/icons-large/returns.svg"
              alt=""
            />
          </div>
          <h4>EASY RETURNS</h4>
          <p>Easy returns up to 3 months after receipt</p>
        </div>
        <div>
          <div>
            <img
              src="https://www.charlestyrwhitt.com/on/demandware.static/Sites-CTShirts-XBR-Site/-/default/dw0b446799/images/icons-large/feefo_logo.svg"
              alt=""
              style={{ height: "20px", marginTop: "25px" }}
            />
          </div>
          <h4>AWARD-WINNING SERVICE</h4>
          <p>4.7/5 Customer experience Feefo rating</p>
        </div>
      </div>
      <div id="container2">
        <div>
          <h1>Earth, Wind and Power</h1>
          <p>
            As a carbon neutral business, we support climate positive projects.
            With the help of
            <br /> Ecologi, we’re funding wind power farms in Mexico and
            Honduras to create renewable energy.
          </p>
          <button>
            <a href="./shirts.html">FIND OUT MORE</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
