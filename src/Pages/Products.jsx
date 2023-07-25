import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductPage/ProductCard";
import Filter from "../Components/ProductPage/Filter";
import { Box, Grid } from "@chakra-ui/react";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/products/?category=${category}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      {/*
      <ProductCard />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt="img" />
          </li>
        ))}
      </ul> */}
      <Grid templateColumns="1.25fr 4.75fr" gap={6}>
        <Box>
          <Filter />
        </Box>
        <Grid templateColumns="repeat(5,1fr)" gap={-1}>
          {products.map((product) => {
            return <ProductCard {...product} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
