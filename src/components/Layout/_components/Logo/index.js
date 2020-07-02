import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '../../../Typography';

const Logo = () => (
  <Link to="/">
    <Typography
      variant="h5"
      component="span"
      color="secondary"
      uppercase
    >
      Games Search
    </Typography>
  </Link>
);

export default Logo
