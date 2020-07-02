import React from 'react';
import { Grid } from '@material-ui/core';

import SkeletonImage from '../../../components/SkeletonImage';

const SkeletonGallery = () => (
  <>
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
  </>
);

export default SkeletonGallery
