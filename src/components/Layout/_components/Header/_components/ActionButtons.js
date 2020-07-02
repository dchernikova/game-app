import React from 'react';

import { Hidden } from '@material-ui/core';

import CartButton from '../../../../Actions/CartButton';
import BurgerButton from '../../../../Actions/BurgerButton';
import ProfileButton from '../../../../Actions/ProfileButton';

const ActionButtons = () => (
  <>
    <ProfileButton />
    <CartButton />

    <Hidden mdUp>
      <BurgerButton />
    </Hidden>
  </>
);

export default ActionButtons
