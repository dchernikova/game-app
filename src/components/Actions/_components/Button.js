import { IconButton } from '@material-ui/core';

import styled from 'styled-components';

const StyledButton = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default StyledButton
