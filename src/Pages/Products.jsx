import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductPage/ProductCard";
import Filter from "../Components/ProductPage/Filter";
import { Box, Grid } from "@chakra-ui/react";
import Breadcrum from "../Components/ProductPage/Breadcrum";
import Hero from "../Components/ProductPage/Hero";

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
      <Breadcrum category={category} />
      <Hero category={category} />
      <Grid
        templateColumns={{ lg: "1fr 5fr", xl: "1fr 5fr", "2xl": "1fr 5fr" }}
        gap={4}
      >
        <Box>
          <Filter />
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(2,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(5,1fr)",
          }}
        >
          {products.map((product) => {
            return <ProductCard {...product} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
