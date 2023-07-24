import {
  Flex,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav>
      <Flex justify="space-between" align="center" px="60px">
        <div>USER ICON HERE</div>
        <Flex py="20px" px="10px" flexDirection="column" align="center">
          <Heading
            fontSize="1.4rem"
            lineHeight="1.8rem"
            color="#001f49"
            letterSpacing="6px"
          >
            STYLE FUSION
          </Heading>
          <Text fontSize="0.75rem">JERMYN STREET LONDON</Text>
        </Flex>
        <Flex align="center" gap="30px">
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.500" />
            </InputRightElement>
            <Input type="tel" placeholder="What are you looking for ?" />
          </InputGroup>
          CART
        </Flex>
      </Flex>
      <Flex
        bg="#ebedf3"
        listStyleType="none"
        fontSize="13px"
        py="14px"
        px={{ lg: "8rem", xl: "15rem", "2xl": "30rem" }}
        justifyContent="space-between"
        fontWeight="thin"
      >
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            SHIRTS
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            POLOS
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            SUITS
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            TROUSERS
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            KNITWEAR
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            JACKETS & COATS
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            SHOES
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            |
          </Text>
        </li>
        <li>
          <Text fontWeight="light" color="#5e5e5e">
            ACCESSORIES
          </Text>
        </li>
      </Flex>
    </nav>
  );
};

export default Navbar;
