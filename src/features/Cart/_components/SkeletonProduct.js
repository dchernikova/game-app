import React from 'react';

import { Box, Grid } from '@material-ui/core';

import Skeleton from '../../../components/Skeleton';
import SkeletonImage from '../../../components/SkeletonImage';
import Typography from '../../../components/Typography';

const SkeletonProduct = () => (
  <Grid
    container
    alignItems="center"
    spacing={4}
  >
    <Grid item xs={12} sm={3}>
      <SkeletonImage />
    </Grid>

    <Grid item xs={6}>
      <Typography>
        <Skeleton />
      </Typography>
    </Grid>

    <Grid item xs={6} sm={3}>
      <Box align="right">
        <Typography
          right
          marginBottom={1}
        >
          <Skeleton />
        </Typography>

        <Typography>
          <Skeleton />
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

export default SkeletonProduct
