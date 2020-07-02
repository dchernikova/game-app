import React from 'react';

import { Box } from '@material-ui/core';

import styled from 'styled-components';

import Wrapper from '../../../../../Wrapper';
import Typography from '../../../../../Typography';

const StyledBox = styled(Box)`
  padding: 24px 0;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.secondary};
`;

const Legal = () => (
  <StyledBox boxShadow={3}>
    <Wrapper>
      <Typography>
        Some data and images are provided by <StyledLink href="https://api.rawg.io/docs" target="_blank" rel="noopener noreferrer">RAWG</StyledLink>.
      </Typography>
    </Wrapper>
  </StyledBox>
);

export default Legal
