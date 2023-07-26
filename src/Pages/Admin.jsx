import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Input,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import Navbar from "../Components/Admin/Navbar";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/products").then((response) => {
      setProducts(response.data);
    });
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCreateProduct = () => {
    axios.post("http://localhost:5000/products", newProduct).then(() => {
      setNewProduct({ name: "", description: "", price: 0 });
      fetchProducts();
    });
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    axios
      .put(`http://localhost:5000/products/${productId}`, updatedProduct)
      .then(() => {
        fetchProducts();
        onClose();
      });
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`http://localhost:5000/products/${productId}`).then(() => {
      fetchProducts();
    });
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  if (!isLoggedIn) {
    return (
      <ChakraProvider>
        <Box p={4} bg="gray.100" minHeight="100vh">
          <Flex align="center" justify="center" height="100%">
            <Box maxW="400px" p={6} bg="white" borderRadius="md" boxShadow="md">
              <Heading size="lg" mb={4}>
                Login
              </Heading>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormControl>
              <Button
                colorScheme="blue"
                onClick={handleLogin}
                mt={4}
                isFullWidth
              >
                Log In
              </Button>
            </Box>
          </Flex>
        </Box>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Navbar handleLogout={handleLogout} />
      <Box p={4} bg="gray.100" minHeight="100vh">
        <Box
          maxW="800px"
          mx="auto"
          mt={8}
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Heading size="lg" mb={4}>
            E-commerce Admin Panel
          </Heading>
          <Flex mb={4}>
            <FormControl flex="1" mr={2}>
              <FormLabel>Product Name</FormLabel>
              <Input
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </FormControl>
            {/* <FormControl flex="2" mx={2}>
              <FormLabel>Description</FormLabel>
              <Input
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
            </FormControl> */}
            <FormControl flex="1" ml={2}>
              <FormLabel>Price</FormLabel>
              <Input
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: parseFloat(e.target.value),
                  })
                }
              />
            </FormControl>
            <Button
              flex="1"
              mt={8}
              colorScheme="blue"
              onClick={handleCreateProduct}
            >
              Add Product
            </Button>
          </Flex>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <th></th>
                <Th>Price</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>${product.price.toFixed(2)}</Td>
                  <Td>
                    <AiOutlineEdit
                      style={{ marginRight: "0.5rem", cursor: "pointer" }}
                      onClick={() => handleEditProduct(product)}
                    />
                    <AiOutlineDelete
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteProduct(product.id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        {/* Edit product modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input
                  value={selectedProduct?.name || ""}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Description</FormLabel>
                <Input
                  value={selectedProduct?.description || ""}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      description: e.target.value,
                    })
                  }
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  value={selectedProduct?.price || 0}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              </FormControl>
            </ModalBody>
            <Button
              colorScheme="blue"
              onClick={() =>
                handleUpdateProduct(selectedProduct.id, selectedProduct)
              }
              mt={4}
            >
              Save Changes
            </Button>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
}

export default Admin;
