import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Button, Box } from '@material-ui/core';

// import Tag from './Tag';
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
          <Gallery images={images.gamePreview} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Image
            src={images.main}
            alt={name}
          />

          <Box marginY={4}>
            <Typography marginBottom={4}>
              {description}
            </Typography>

            {/*<Typography marginBottom={1}>*/}
            {/*  All reviews: <Typography component="span" color="secondary">Overwhelmingly Positive</Typography> (2 323)*/}
            {/*</Typography>*/}
            {/*<Typography marginBottom={1}>*/}
            {/*  Release date: <Typography component="span">18 Jun, 2020</Typography>*/}
            {/*</Typography>*/}
            {/*<Typography>*/}
            {/*  Developer: <Typography component="span" color="secondary">Quantic Dream</Typography>*/}
            {/*</Typography>*/}
            {/*<Typography>*/}
            {/*  Publisher: <Typography component="span" color="secondary">Quantic Dream</Typography>*/}
            {/*</Typography>*/}
          </Box>

          {/*<Box marginY={4}>*/}
          {/*  <Tag label="Adventure" />*/}
          {/*  <Tag label="Story Rich" />*/}
          {/*  <Tag label="Choices Matter" />*/}
          {/*  <Tag label="Third Person" />*/}
          {/*</Box>*/}
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
