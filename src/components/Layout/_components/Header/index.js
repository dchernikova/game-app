import React from 'react';

import styled from 'styled-components';

import { Box, Grid, Hidden } from '@material-ui/core';

import Wrapper from '../../../Wrapper';

import Navigation from './_components/Navigation';
import ActionButtons from './_components/ActionButtons';

import Logo from '../Logos/Steam';

const StyledBox = styled(Box)`
  background: rgba(40, 40, 40, 0.8);
`;

const Header = () => (
  <StyledBox
    marginY={3}
    boxShadow={3}
    component="header"
  >
    <Wrapper>
      <Grid
        container
        wrap="nowrap"
        alignItems="center"
        justify="space-between"
      >
        <Logo />

        <Hidden smDown>
          <Navigation />
        </Hidden>

        <ActionButtons />
      </Grid>
    </Wrapper>
  </StyledBox>
);

export default Header
