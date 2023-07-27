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

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
  return (
    <nav>
      <Flex justify="space-between" align="center" px="60px">
        <div className="user-icon">USER ICON HERE</div>
        <Flex
          py="20px"
          px="10px"
          flexDirection="column"
          align="center"
          alignItems="center"
          mx={{ base: "0px", sm: "5rem", md: "14rem", lg: "10rem" }}
        >
          <Heading
            fontSize="1.4rem"
            lineHeight="1.8rem"
            color="#001f49"
            letterSpacing="6px"
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
            borderRadius="5px"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          >
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input type="tel" placeholder="What are you looking for ?" />
          </InputGroup>

          <button className="cart">
            <ExternalLinkIcon />
          </button>
        </Flex>
      </Flex>
      <div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="list">
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                SHIRTS
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                POLOS
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                SUITS
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                TROUSERS
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                KNITWEAR
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                JACKETS & COATS
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                SHOES
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                ACCESSORIES
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                CREATE AN ACCOUNT
              </Text>
            </li>
            <li className="items">
              <Text fontWeight="light" color="#5e5e5e">
                LOG IN
              </Text>
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
