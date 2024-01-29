import React from "react";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const CartPage = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div>
      <ProductCard addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
