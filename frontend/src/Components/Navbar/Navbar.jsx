import {
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SearchIcon, HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUser, FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const token = localStorage.getItem("token") || null;
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleAccount = () => {
    if (token !== null) {
      navigate("/account");
    } else {
      navigate("/register");
    }
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <nav>
      <Flex justify="space-between" align="center" px="60px">
        <button className="user-icon" onClick={handleAccount}>
          <FaUser size={25} />
        </button>
        <Flex
          // border="1px solid black"
          py="20px"
          // px="25rem"
          // mx="40rem"
          flexDirection="column"
          // align="center"
          alignItems="center"
          mx={{ base: "0px", sm: "5rem", md: "14rem", lg: "rem" }}
        >
          <Heading
            fontSize="1.4rem"
            lineHeight="1.8rem"
            color="#001f49"
            letterSpacing="6px"
            onClick={handleHome}
            cursor="pointer"
            // paddingLeft="14rem"
            // border="1px solid black"
          >
            STYLE FUSION
          </Heading>
          <Text fontSize="0.5rem" letterSpacing="3px">
            JERMYN STREET LONDON
          </Text>
        </Flex>
        <Flex align="center" gap="30px">
          <InputGroup
            bg="#ebedf3"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
            width="20rem"
            size="sm"
            marginRight={8}
          >
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input
              type="text"
              borderRadius="5px"
              placeholder="What are you looking for ?"
            />
          </InputGroup>

          <button className="cart" onClick={handleCart}>
            <FaBagShopping size={25} style={{ marginTop: "5px" }} />
          </button>
        </Flex>
      </Flex>
      <div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/shirts">SHIRTS</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/polos">POLOS</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/suits">SUITS</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/trousers">TROUSERS</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/knitwear">KNITWEAR</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/jackets">JACKETS & COATS</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/shoes">SHOES</Link>
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                <Link to="/products/accessories">ACCESSORIES</Link>
              </Text>
            </li>
            <li className="items">
              {token ? (
                <FaUser
                  onClick={() => {
                    navigate("/account");
                  }}
                />
              ) : (
                <Text fontWeight="light" color="#5e5e5e">
                  CREATE AN ACCOUNT
                </Text>
              )}
            </li>
            <li className="items">
              {token ? (
                ""
              ) : (
                <Text fontWeight="light" color="#5e5e5e">
                  LOG IN
                </Text>
              )}
            </li>
          </ul>
        )}

        <button onClick={toggleNav} className="btn">
          <HamburgerIcon />
        </button>
      </div>
      <div style={{ padding: "5px 40px", background: "#ebedf3" }}>
        {(!toggleMenu || screenWidth > 1024) && (
          <InputGroup
            display={{
              base: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
              "2xl": "none",
            }}
            bg="white"
            borderRadius="5px"
          >
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input type="tel" placeholder="What are you looking for ?" />
          </InputGroup>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
