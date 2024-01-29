import React from "react";
import Container from "@mui/material/Container";
import ProductUpload from "../components/ProductUpload";
import ProductList from "../components/ProductList";
import Stack from "@mui/material/Stack"; // Import Stack from MUI
import AdminList from "../components/AdminList";

const AdminPage = ({ addToCart }) => {
  return (
    <Container
      maxWidth={false} // Use 'false' to make the container full width
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Make the container full height
        padding: "0", // Remove padding
      }}
    >
      <Stack direction="row" spacing={8} sx={{ width: "220%" }}>
        <div style={{ maxWidth: "60%" }}>
          {" "}
          {/* Set maxWidth for ProductUpload */}
          <ProductUpload />
        </div>
        <div style={{ maxWidth: "70%" }}>
          {" "}
          {/* Set maxWidth for ProductList */}
          <AdminList addToCart={addToCart} />
        </div>
      </Stack>
    </Container>
  );
};

export default AdminPage;
