import React from 'react';

import { Box, Button, Grid } from '@material-ui/core';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

const Product = ({ product, handleRemoveItem }) => {
  const { name, price, images } = product;

  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={3}>
        <Image
          src={images.main}
          alt={name}
        />
      </Grid>

      <Grid item xs={6}>
        <Typography bold>
          {name}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={3}>
        <Box align="right">
          <Typography
            right
            marginBottom={1}
          >
            {price}
          </Typography>

          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={handleRemoveItem}
          >
            Remove
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Product
