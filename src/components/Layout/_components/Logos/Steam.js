import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Typography from '../../../Typography';

import theme from './../../../../theme';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
`;

const Logo = ({ withText }) => (
  <StyledLink to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height={40}
    >
      <path
        fill={theme.color.secondary}
        d="M2,64.4C8.2,85,27.3,100,49.9,100c27.6,0,50.1-22.4,50.1-50c0-27.6-22.4-50-50-50C23.4,0,1.7,20.6,0,46.7C3.2,52.1,4.5,55.5,2,64.4L2,64.4z"
      />
      <path
        fill={theme.color.primary}
        d="M47.4,37.5c0,0.1,0,0.2,0,0.3L35.2,55.5c-2-0.1-4,0.3-5.8,1c-0.8,0.3-1.6,0.8-2.4,1.2L0.1,46.7c0,0-0.6,10.2,2,17.9l19,7.9c0.9,4.2,3.9,8,8.2,9.8c7,3,15.2-0.4,18.1-7.5c0.8-1.8,1.1-3.8,1.1-5.7L66,56.5c0.1,0,0.3,0,0.4,0c10.5,0,19-8.5,19-19s-8.5-19-19-19C55.9,18.5,47.4,27,47.4,37.5z M44.4,73.5c-2.3,5.5-8.6,8-14,5.8c-2.5-1-4.4-3-5.5-5.2l6.2,2.6c4,1.7,8.6-0.2,10.3-4.2s-0.2-8.6-4.3-10.3l-6.4-2.7c2.4-0.9,5.3-1,7.9,0.1c2.7,1.1,4.7,3.2,5.8,5.8C45.6,67.9,45.6,70.9,44.4,73.5M66.4,50.2c-7,0-12.7-5.7-12.7-12.7c0-7,5.7-12.7,12.7-12.7s12.7,5.7,12.7,12.7S73.4,50.2,66.4,50.2 M56.9,37.5c0-5.3,4.3-9.5,9.5-9.5s9.5,4.2,9.5,9.5S71.6,47,66.4,47S56.9,42.7,56.9,37.5z"
      />
    </svg>

    {withText && (
      <Typography
        variant="h5"
        component="p"
        color="secondary"
        marginLeft={2}
      >
        STEAM
      </Typography>
    )}
  </StyledLink>
);

export default Logo
