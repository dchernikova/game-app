import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import Typography from '../../../Typography';

const StyledLink = styled(
  ({
     underline,
     noPadding,
     ...rest
   }) => <NavLink {...rest} />,
)`
  display: inline-flex;
  position: relative;

  padding: ${({ noPadding }) => noPadding ? '0' : '24px 16px'};

  text-decoration: none;
  color: ${({ color, theme }) => color === 'primary' ? theme.color.primary : theme.color.secondary};

  &::after {
    content: '';

    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    height: 2px;

    background-color: transparent;

    transition: background-color 0.2s;
  }

  &.active {
    &::after {
      background-color: ${({ underline, theme }) => underline && theme.color.secondary};
    }
  }

  &:hover {
    color: ${({ color, theme }) => color === 'primary' ? theme.color.secondary : theme.color.primary};

    &::after {
      background-color: ${({ underline, theme }) => underline && theme.color.secondary};
    }
  }
`;

const Link = ({ children, color = 'primary', href, underline, noPadding }) => (
  <StyledLink
    exact
    to={href}
    color={color}
    underline={underline}
    noPadding={noPadding}
  >
    <Typography
      component="span"
      color="inherit"
    >
      {children}
    </Typography>
  </StyledLink>
);

export default Link
