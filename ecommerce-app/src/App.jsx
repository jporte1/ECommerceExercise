import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Counters from "./components/Counters";
import InCartPage from "./pages/InCartPage";
import { PRODUCTS_DATA } from "./data/products";

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState(
    PRODUCTS_DATA.map((product) => ({ ...product, value: 0 }))
  );

  const [cart, setCart] = useState([]);

  const handleIncrement = (productId) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId ? { ...product, value: product.value + 1 } : product
      );
  
      return updatedProducts;
    });
  };

  const handleAddToCart = (productId) => {
    const updatedProducts = selectedProducts.map((product) => {
      if (product.id === productId && product.value >= 1) {
        return { ...product, value: 0 };
      }
      return product;
    });
  
    const productToAdd = selectedProducts.find((product) => product.id === productId);
    if (productToAdd && productToAdd.value >= 1) {
      setCart((prevCart) => [...prevCart, productToAdd]);
    }
  
    setSelectedProducts(updatedProducts);
  };
  
  

  const handleDecrement = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.value > 0
          ? { ...product, value: product.value - 1 }
          : product
      )
    );
  };

  const handleDelete = (productId) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <Navbar cart={cart}  />
      <div className="container">
        <Counters
          products={selectedProducts}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onAddToCart={handleAddToCart}
        />
        <InCartPage cart={cart} />
      </div>
    </div>
  );
};

export default App;
