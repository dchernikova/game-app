import React from 'react';

import { Box } from '@material-ui/core';

import styled from 'styled-components';

import Link from '../../../Link';
import Wrapper from '../../../../../Wrapper';
import Typography from '../../../../../Typography';

const StyledBox = styled(Box)`
  padding: 24px 0;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));
`;

const Legal = () => (
  <StyledBox boxShadow={3}>
    <Wrapper>
      <Typography>
        © 2020 GAMES SEARCH Corporation. All rights reserved. <Link noPadding color="secondary" href="/">Privacy Policy</Link> | <Link noPadding color="secondary" href="/">Legal</Link>
      </Typography>
    </Wrapper>
  </StyledBox>
);

export default Legal
