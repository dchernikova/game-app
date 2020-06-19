import React from 'react';

import { Box, Grid } from '@material-ui/core';

import Skeleton from '../../../components/Skeleton';
import SkeletonImage from '../../../components/SkeletonImage';
import Typography from '../../../components/Typography';

import SkeletonBadges from './SkeletonBadges';

const SkeletonProfile = () => (
  <Grid
    container
    spacing={4}
  >
    <Grid item xs={12} sm={4}>
      <SkeletonImage aspectRatio={[1, 1]} />

      <Box marginTop={5}>
        <Skeleton />
      </Box>
    </Grid>

    <Grid item xs={12} sm={8}>
      <Typography
        variant="h5"
        color="secondary"
        marginBottom={1}
      >
        <Skeleton />
      </Typography>

      <Typography>
        <Skeleton />
      </Typography>

      <Typography
        variant="body2"
        marginY={4}
      >
        <Skeleton />
      </Typography>

      <SkeletonBadges />
    </Grid>
  </Grid>
);

export default SkeletonProfile
