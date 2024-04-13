import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Counter = ({ product, onIncrement, onDecrement, onAddToCart }) => {
  const formatText = () => {
    if (product.value > 0) {
      return product.value;
    }
    return 0;
  }

  const getClassNames = () => {
    if(product.value > 0) {
      return "badge bg-primary"
    }
    return "badge bg-warning text-dark"
  }

  return (
    <div className="m-4">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" >
            {product.price}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" onClick={() => onAddToCart(product.id)}>Add To Cart</Button>
          <Button size="small" onClick={() => onDecrement(product.id)} disabled={product.value <= 0}>-</Button>
          <span className={getClassNames()}>{formatText()}</span>
          <Button size="small" onClick={() => onIncrement(product.id)}>+</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Counter;
