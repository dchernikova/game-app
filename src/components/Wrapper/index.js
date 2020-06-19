import React from 'react';

import { Grid } from '@material-ui/core';

import styled from 'styled-components';

const Wrapper = styled(({ withVerticalPadding, ...rest }) => <Grid {...rest} />)`
  max-width: ${({ theme }) => theme.layout.wrapper};
  padding: ${({ withVerticalPadding }) => withVerticalPadding ? '40px' : 0} 16px;
  margin: 0 auto;
`;

export default Wrapper
