import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const InCartPage = ({ cart }) => {
  // Calculate total price with 2 decimal places
  const totalPrice = cart.reduce((total, product) => {
    return total + (product.value * product.price);
  }, 0).toFixed(2); // Convert the total to a string with 2 decimal places

  return (
    <div>
      <h2>In Cart Products</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.value}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{(product.value * product.price).toFixed(2)}</TableCell> {/* Display total price with 2 decimal places */}
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">Total Price:</TableCell>
              <TableCell>{totalPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InCartPage;
