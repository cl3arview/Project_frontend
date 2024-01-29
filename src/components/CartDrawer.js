import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { addProductToCart } from "../api"; // Import the addProductToCart function

const drawerStyle = {
  width: 300,
  padding: "20px",
  backgroundColor: "#f0f0f0",
  height: "100%",
};

const buttonStyle = {
  marginTop: "auto",
};

const CartDrawer = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.price, 0);

  const handleProceedToCheckout = async () => {
    console.log("Proceed to Checkout button clicked!");
    console.log("Token:", localStorage.getItem("token"));
    console.log("UserId:", localStorage.getItem("userId"));
    console.log("Token Expiration:", localStorage.getItem("tokenExpiration"));

    // Send a request to add each item to the user's cart
    for (const item of cartItems) {
      try {
        // Send a request to your backend to add the product to the user's cart
        console.log("Adding item to cart:", item);
        await addProductToCart(localStorage.getItem("userId"), item.id);
        console.log("Item added to cart successfully.");

        // Optionally, you can also remove the item from the cart locally
        removeFromCart(item.id);
        console.log("Item removed from local cart.");
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }

    // Clear the cart after adding items to the user's cart

    console.log("Cart cleared.");
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <div style={drawerStyle}>
        <List>
          <ListItem>
            <ListItemText primary="Your Cart" />
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          {cartItems.length === 0 ? (
            <ListItem>
              <ListItemText primary="No items in cart." />
            </ListItem>
          ) : (
            cartItems.map((item) => (
              <ListItem key={item.id}>
                <img
                  src={item.imagePath}
                  alt={item.name}
                  style={{ width: 40, height: 40, marginRight: 10 }}
                />
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price}`}
                />
                <IconButton
                  onClick={() => removeFromCart(item.id)}
                  aria-label="remove"
                >
                  <RemoveShoppingCartIcon />
                </IconButton>
              </ListItem>
            ))
          )}
          <Divider />
          <ListItem>
            <ListItemText
              primary={`Total: $${calculateTotal(cartItems).toFixed(2)}`}
            />
          </ListItem>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={buttonStyle}
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </List>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
