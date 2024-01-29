// cartUtils.js

export const addToCart = (item, cartItems, setCartItems) => {
    const updatedCartItems = [...cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
    setCartItems(updatedCartItems);
  };
  
  export const removeFromCart = (id, cartItems, setCartItems) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
    setCartItems(updatedCartItems);
  };
  