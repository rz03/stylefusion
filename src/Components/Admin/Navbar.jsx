import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import "./Navbar.css";

export default function Navbar({ handleLogout }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">USERS</li>
          <li className="items">PRODUCTS</li>
          <Button colorScheme="red" onClick={handleLogout}>
            Log Out
          </Button>
        </ul>
      )}
    </nav>
  );
}
