import React, { useState, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductList from './components/ProductList';
import ProductUpload from './components/ProductUpload';
import Signup from './components/SignUp';
import Login from './components/login';
import AdminPage from './pages/AdminPage'; // Your AdminPage component
import ClientPage from './pages/ClientPage'; // Your ClientPage component
import Dialog from '@mui/material/Dialog';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RoleBasedRedirect from './components/RoleBasedRedirect'; // Import the new component

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, item];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((cartItem) => cartItem.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
      return updatedCartItems;
    });
  };



  return (
    <Router>
    <div className="App">
      {/* Include the RoleBasedRedirect component */}
      <RoleBasedRedirect />

      {/* Your existing code */}
      <CssBaseline />
      <Header setCartOpen={setCartOpen} onOpenSignup={handleOpenSignup} onOpenLogin={handleOpenLogin} />
      
      <Container maxWidth="lg" sx={{ minHeight: 'calc(100vh - 112px)' }}>
        
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/client" element={<ClientPage addToCart={addToCart} />} />
          {/* ... other routes */}
        </Routes>
      </Container>
            <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Footer />
      
      <Dialog open={showSignup} onClose={handleCloseSignup}>
        <Signup />
      </Dialog>
      <Dialog open={showLogin} onClose={handleCloseLogin}>
        <Login />
      </Dialog>
    </div>
    </Router>
  );
}

export default App;