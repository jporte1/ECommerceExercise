import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Toolbar, Typography, Badge } from '@mui/material';

const Navbar = ({ cart }) => {
  const uniqueProductCount = new Set(cart.map(item => item.id)).size;

  return (
    <AppBar position="static" sx={{ marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce App
        </Typography>
        <Badge badgeContent={uniqueProductCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
