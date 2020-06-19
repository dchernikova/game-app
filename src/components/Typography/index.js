import React from 'react';

import { spacing } from '@material-ui/system';
import { Typography as MUITypography } from '@material-ui/core';

import styled from 'styled-components';

const textAlignMixin = ({ center, right }) => {
  if (center) return 'center';
  if (right) return 'right';
  return 'left'
};

const StyledTypography = styled(
  ({
     margin,
     marginX,
     marginY,
     marginTop,
     marginRight,
     marginBottom,
     marginLeft,
     uppercase,
     center,
     right,
     bold,
     ...rest
   }) => <MUITypography {...rest} />,
)`
  && {
    ${spacing};

    color: ${({ color, theme }) => color === 'inherit' ? 'inherit' : theme.color[color]};

    text-align: ${props => textAlignMixin(props)};
    text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};

    font-weight: ${({ bold }) => (bold ? '600' : '400')};

    transition: color 0.2s;
  }
`;

const Typography = ({ children, color = 'primary', bold, uppercase, ...props }) => (
  <StyledTypography
    bold={bold}
    color={color}
    uppercase={uppercase}
    {...props}
  >
    {children}
  </StyledTypography>
);

export default Typography
