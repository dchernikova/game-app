import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import Wrapper from '../../components/Wrapper';

import ProfileComponent from './_components/Profile';
import SkeletonProfile from './_components/SkeletonProfile';

import FavoriteProducts from '../FavoriteProducts';

import { useAuthentication } from '../../contexts/Authentication';

const Profile = () => {
  const history = useHistory();
  const { userData, fetchData, isLogged } = useAuthentication();

  useEffect(() => {
    fetchData();
  }, []);

  if (!isLogged) {
    history.push('/');
  }

  return (
    <Wrapper withVerticalPadding>
      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} md={7}>
          {userData ? (
            <ProfileComponent data={userData} />
          ) : (
            <SkeletonProfile />
          )}
        </Grid>

        <Grid item xs={12} md={5}>
          <FavoriteProducts />
        </Grid>
      </Grid>
    </Wrapper>
  )
};

export default Profile
