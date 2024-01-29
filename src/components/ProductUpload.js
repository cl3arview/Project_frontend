import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createProduct } from "../services/api"; // Import the createProduct function
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

import "react-toastify/dist/ReactToastify.css"; // Import default styles for react-toastify

const ProductUpload = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    description: "", // Add description field
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({
      ...productInfo,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setProductInfo({
      ...productInfo,
      image: imageFile,
    });

    // Create an image preview URL for the selected file
    const previewURL = URL.createObjectURL(imageFile);
    setImagePreview(previewURL);
  };

  const handleSubmit = async () => {
    try {
      // Create a new product using the API function
      const newProduct = await createProduct(
        productInfo.name,
        productInfo.price,
        productInfo.description, // Include description
        productInfo.image,
      );

      // Assuming the API call is successful, you can handle the response here
      console.log("Product created:", newProduct);

      // Display a success toast
      toast.success("Product uploaded successfully", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
      });

      // Clear the form and image preview
      setProductInfo({
        name: "",
        price: "",
        description: "", // Clear description
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      // Handle errors, e.g., display an error message to the user
      console.error("Error creating product:", error);

      // Display an error toast
      toast.error("Error uploading product", {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
      });
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <div style={{ padding: "20px" }}>
            {" "}
            {/* Add padding to the container */}
            <Typography
              variant="h5"
              gutterBottom
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Upload a New Product
            </Typography>
            <form>
              <TextField
                name="name"
                label="Product Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={productInfo.name}
                onChange={handleChange}
              />
              <TextField
                name="price"
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                value={productInfo.price}
                onChange={handleChange}
              />
              <TextField
                name="description" // Description field
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline // Allow multiple lines
                rows={4} // Adjust the number of rows as needed
                value={productInfo.description} // Value for description
                onChange={handleChange}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "20px 0",
                }}
              >
                {" "}
                {/* Add margin */}
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <label htmlFor="image-upload">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Image
                  </Button>
                </label>
                {imagePreview && (
                  <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      src={imagePreview}
                      alt="Image Preview"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Image Preview
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
              >
                Create Product
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>

      {/* Add the ToastContainer component for displaying toasts */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </Container>
  );
};

export default ProductUpload;
