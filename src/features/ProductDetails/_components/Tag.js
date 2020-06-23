import { Chip } from '@material-ui/core';

import styled from 'styled-components';

const Tag = styled(Chip).attrs(() => ({ variant: 'outlined', size: 'small' }))`
  && {
    color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
  }

  margin: 4px 8px 4px 0;
`;

export default Tag
