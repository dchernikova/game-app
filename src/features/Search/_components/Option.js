import React from 'react';

import { ButtonBase, Box, Grid } from '@material-ui/core';

import styled from 'styled-components';

import Image from '../../../components/Image';
import Typography from '../../../components/Typography';

const StyledTypography = styled(Typography)`
  && {
    color: inherit;
  }
`;

const StyledGrid = styled(Grid)`
  && {
    margin: -8px;  
    color: ${({ theme }) => theme.color.blue};
  }

  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    && {
      color: ${({ theme }) => theme.color.primary};
      background-color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const Option = ({ item, onClick }) => {
  const { name, images, price } = item;

  return (
    <Box padding={1}>
      <StyledGrid
        container
        component={ButtonBase}
        onClick={onClick}
        spacing={2}
      >
        <Grid item xs={5}>
          <Image
            src={images.main}
            alt={name}
          />
        </Grid>
        <Grid item xs={7}>
          <StyledTypography bold>
            {name}
          </StyledTypography>
          <StyledTypography variant="body2">
            {price}
          </StyledTypography>
        </Grid>
      </StyledGrid>
    </Box>
  )
};

export default Option
