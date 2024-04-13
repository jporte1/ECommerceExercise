import React from 'react';
import Counter from './Counter';

const Counters = ({ products, onIncrement, onDecrement, onDelete, onAddToCart }) => {
  // Check if products array is undefined or empty
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px' }}>
      {products.map((product) => (
       <div key={product.id}>
         <Counter
           product={product}
           onIncrement={onIncrement}
           onDecrement={onDecrement}
           onAddToCart={onAddToCart} 
         />
       </div>
      ))}
    </div>
  );
};

export default Counters;
