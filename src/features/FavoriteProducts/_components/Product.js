import React from 'react';

import { Grid } from '@material-ui/core';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

import { getRandomNumber } from '../../../helpers/_utils/getRandomNumber';

const Product = ({ product }) => {
  const { name, images } = product;

  return (
    <Grid
      container
      alignItems="center"
      spacing={4}
    >
      <Grid item xs={12} sm={5}>
        <Image
          src={images.main}
          alt={name}
        />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography marginY={1}>
          {name}
        </Typography>

        <Typography
          variant="h5"
          color="secondary"
        >
          {getRandomNumber()}
        </Typography>

        <Typography>
          Hours played
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Product
