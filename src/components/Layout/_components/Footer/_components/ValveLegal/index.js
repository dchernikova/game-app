import React from 'react';

import { Box, Grid } from '@material-ui/core';

import styled from 'styled-components';

import ValveLogo from '../../../Logos/Valve';

import Link from '../../../Link';
import Wrapper from '../../../../../Wrapper';
import Typography from '../../../../../Typography';

const StyledBox = styled(Box)`
  padding: 24px 0;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));
`;

const ValveLegal = () => (
  <StyledBox boxShadow={3}>
    <Wrapper>
      <Grid
        container
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6} sm={2}>
          <Box marginRight={4}>
            <ValveLogo />
          </Box>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Typography>
            © 2020 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the
            US and other countries.
            <br />
            VAT included in all prices where applicable. <Link noPadding color="secondary" href="/">Privacy Policy</Link> | <Link noPadding color="secondary" href="/">Legal</Link> | <Link noPadding color="secondary" href="/">Steam Subscriber Agreement</Link> | <Link noPadding color="secondary" href="/">Refunds</Link>
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  </StyledBox>
);

export default ValveLegal
