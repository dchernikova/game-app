import React from 'react';
import { Grid } from '@material-ui/core';

import Skeleton from '../../../components/Skeleton';
import SkeletonImage from '../../../components/SkeletonImage';
import Typography from '../../../components/Typography';

const SkeletonProduct = () => (
  <>
    <Typography
      variant="h4"
      component="h1"
      marginBottom={4}
    >
      <Skeleton />
    </Typography>

    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} sm={7}>
        <SkeletonImage />

        <Grid
          container
          spacing={4}
        >
          <Grid item xs={4}>
            <SkeletonImage marginY={4} />
          </Grid>
          <Grid item xs={4}>
            <SkeletonImage marginY={4} />
          </Grid>
          <Grid item xs={4}>
            <SkeletonImage marginY={4} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={5}>
        <SkeletonImage />

        <Typography marginY={4}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>

        <Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default SkeletonProduct
