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

const Product = ({ product, mainImage, description }) => {
  const { id, name, genres, developers, publishers, released } = product;

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
          <Gallery id={id} />

          <Typography marginBottom={4}>
            {description}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Image
            src={mainImage}
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
                {released}
              </Typography>
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Developers
              </Typography>

              {developers.map((developer) => (
                <Tag
                  key={developer.name}
                  label={developer.name}
                />
              ))}
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Publishers
              </Typography>

              {publishers.map((publisher) => (
                <Tag
                  key={publisher.name}
                  label={publisher.name}
                />
              ))}
            </StyledBox>

            <StyledBox>
              <Typography
                color="secondary"
                uppercase
              >
                Genres
              </Typography>

              {genres.map((genre) => (
                <Tag
                  key={genre.name}
                  label={genre.name}
                />
              ))}
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
