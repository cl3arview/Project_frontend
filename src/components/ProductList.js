import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/api"; // Import the fetchProducts function from your api.js
import { Grid } from "@mui/material"; // Import Grid from Material-UI

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />{" "}
            {/* Pass addToCart here */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductList;
