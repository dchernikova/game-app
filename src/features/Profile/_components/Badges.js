import React from 'react';

import { Grid, Box } from '@material-ui/core';

import Typography from '../../../components/Typography';

import { getRandomNumber } from '../../../helpers/_utils/getRandomNumber';

const categories = ['games', 'badges', 'friends', 'groups'];

const Badges = () => (
  <Grid
    container
    spacing={2}
  >
    {categories.map((category) => (
      <Grid key={category} item xs={6} sm={3}>
        <Box display="inline-block">
          <Typography
            variant="h5"
            component="p"
            color="secondary"
            center
          >
            {getRandomNumber()}
          </Typography>

          <Typography>
            {category}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default Badges
