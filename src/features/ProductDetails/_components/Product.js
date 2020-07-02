import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Grid, Button, Box } from '@material-ui/core';

import styled from 'styled-components';

import Tag from './Tag';
import Gallery from './Gallery';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

import { useCart } from '../../../contexts/Cart';

const StyledBox = styled(Box)`
  margin-bottom: 8px;
`;

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

          <Typography marginBottom={4}>
            {description}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Image
            src={images.main}
            alt={name}
          />

          <Box marginY={4}>
            <StyledBox display="flex">
              <Typography
                color="secondary"
                marginRight={1}
                uppercase
              >
                Release date
              </Typography>

              <Typography>
                Feb 25, 2014
              </Typography>
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Developers
              </Typography>

              <Tag label="Eidos Montreal" />
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Publishers
              </Typography>

              <Tag label="Square Enix" />
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Genres
              </Typography>

              <Tag label="Action" />
              <Tag label="Adventure" />
            </StyledBox>
          </Box>
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
