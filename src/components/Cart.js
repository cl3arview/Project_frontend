import React, { useEffect, useState } from "react";

const Cart = ({ removeFromCart }) => {
  // Initialize state with empty array or data from local storage
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    removeFromCart(id); // If you have a removeFromCart method in parent component
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.amount}</p>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove from Cart
          </button>
        </div>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
