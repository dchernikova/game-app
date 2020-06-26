import React from 'react';

import { Grid, Box } from '@material-ui/core';

import profile from '../../../assets/profile-placeholder.svg';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';
import LogoutButton from '../../../components/Actions/LogoutButton';

import Badges from './Badges';

const Profile = ({ data }) => {
  const { name, email } = data;

  return (
    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} sm={4}>
        <Image
          src={profile}
          alt={name}
          aspectRatio={[1, 1]}
        />

        <Box marginTop={5}>
          <LogoutButton />
        </Box>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Typography
          variant="h5"
          color="secondary"
          marginBottom={1}
        >
          {name}
        </Typography>

        <Typography>
          {email}
        </Typography>

        <Typography
          variant="body2"
          marginY={4}
        >
          No information given.
        </Typography>

        <Badges />
      </Grid>
    </Grid>
  )
};

export default Profile
