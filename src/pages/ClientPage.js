import React from "react";
import Container from "@mui/material/Container";
import ProductUpload from "../components/ProductUpload"; // Ensure the path is correct
import ProductList from "../components/ProductList"; // Ensure the path is correct

const ClientPage = ({ addToCart }) => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "calc(100vh - 112px)" }}>
      <ProductList addToCart={addToCart} />
    </Container>
  );
};

export default ClientPage;
