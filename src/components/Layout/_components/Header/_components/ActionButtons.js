import React from 'react';

import { Box, Hidden } from '@material-ui/core';

import Search from '../../../../../features/Search';

import CartButton from '../../../../Actions/CartButton';
import BurgerButton from '../../../../Actions/BurgerButton';
import ProfileButton from '../../../../Actions/ProfileButton';

const ActionButtons = () => (
  <Box display="flex">
    <Search />

    <ProfileButton />
    <CartButton />

    <Hidden mdUp>
      <BurgerButton />
    </Hidden>
  </Box>
);

export default ActionButtons
