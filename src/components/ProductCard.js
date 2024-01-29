import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Collapse } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductCard = ({ product, addToCart }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAddToCart = () => {
    // Pass the product data to the addToCart function
    addToCart(product);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const serverAddress = "https://localhost:7176";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={product.name} // Display the product title from the prop
      />
      <CardMedia
        component="img"
        height="194"
        src={product.imagePath} // Display the product image from the prop
        alt={product.name} // Use the product title as alt text
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description} {/* Display the product description from the prop */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price.toFixed(2)} {/* Display the product price from the prop */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={handleAddToCart}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="body1" color="text.primary">
          Add to cart {/* Display the product description from the prop */}
        </Typography>
        <IconButton
          aria-label="expand"
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* Display the product description within the expanding content */}
          <Typography paragraph>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard;
