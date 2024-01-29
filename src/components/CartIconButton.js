import React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartIconButton = ({ onClick }) => {
  return (
    <Button

      onClick={onClick}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      Cart
    </Button>
  );
};

export default CartIconButton;
