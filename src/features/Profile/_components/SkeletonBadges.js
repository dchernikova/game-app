import React from 'react';

import { Box, Grid } from '@material-ui/core';

import Skeleton from '../../../components/Skeleton';
import Typography from '../../../components/Typography';

const SkeletonBadges = () => (
  <Grid
    container
    spacing={2}
  >
    {[...Array(4)].map((item) => (
      <Grid key={item} item xs={6} sm={3}>
        <Box>
          <Typography
            variant="h5"
            component="p"
            color="secondary"
            center
          >
            <Skeleton />
          </Typography>

          <Typography>
            <Skeleton />
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default SkeletonBadges
