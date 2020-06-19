import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

import Gallery from './Gallery';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

import { useCart } from '../../../contexts/Cart';

const Product = ({ product }) => {
  const { id, name, description, images } = product;
  const { add, fetchProduct } = useCart();
  const history = useHistory();

  const handleAddToCart = () => {
    add(id);
    history.push('/cart');
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        marginBottom={4}
      >
        {name}
      </Typography>

      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} sm={7}>
          <Gallery
            images={images.gamePreview}
            productName={name}
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Image
            src={images.main}
            alt={name}
          />

          <Typography marginY={4}>
            {description}
          </Typography>

          <Typography>
            User reviews:
          </Typography>

          <Typography>
            Recent: <Typography component="span" color="secondary">Overwhelmingly Positive</Typography> (332
            reviews)
          </Typography>
          <Typography marginBottom={4}>
            Overall: <Typography component="span" color="secondary">Very Positive</Typography> (5 275 reviews)
          </Typography>
        </Grid>
      </Grid>

      <Grid align="right">
        {fetchProduct(id) ? (
          <Button
            to="/cart"
            size="large"
            component={Link}
            color="secondary"
            variant="contained"
          >
            In Cart
          </Button>
        ) : (
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </Grid>
    </>
  )
};

export default Product
