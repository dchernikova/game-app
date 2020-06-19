import React from 'react';

import { Box, Grid } from '@material-ui/core';

import SkeletonProduct from './SkeletonProduct';
import Skeleton from '../../../components/Skeleton';
import Typography from '../../../components/Typography';

const SkeletonCart = () => (
  <Grid container>
    <Grid item xs={12} md={7}>
      <Typography
        variant="h4"
        marginBottom={4}
      >
        <Skeleton />
      </Typography>

      <SkeletonProduct />

      <Box marginY={4}>
        <Typography>
          <Skeleton />
        </Typography>
      </Box>

      <Box
        align="right"
        marginY={4}
      >
        <Skeleton width={120} />
      </Box>

      <Grid
        container
        justify="space-between"
      >
        <Box marginY={1}>
          <Skeleton width={160} />
        </Box>

        <Box marginY={1}>
          <Skeleton width={160} />
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

export default SkeletonCart
