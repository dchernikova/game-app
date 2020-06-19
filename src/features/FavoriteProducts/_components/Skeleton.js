import React from 'react';

import { Grid } from '@material-ui/core';

import Skeleton from '../../../components/Skeleton';
import SkeletonImage from '../../../components/SkeletonImage';
import Typography from '../../../components/Typography';

const SkeletonProduct = () => (
  <Grid
    container
    alignItems="center"
    spacing={4}
  >
    <Grid item xs={12} sm={5}>
      <SkeletonImage />
    </Grid>

    <Grid item xs={12} sm={7}>
      <Typography marginY={1}>
        <Skeleton />
      </Typography>

      <Typography variant="h5">
        <Skeleton />
      </Typography>

      <Typography>
        <Skeleton />
      </Typography>
    </Grid>
  </Grid>
);

export default SkeletonProduct
