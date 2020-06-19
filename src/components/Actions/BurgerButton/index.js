import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Popper, Paper, MenuList, MenuItem, ButtonBase, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';

import Button from './../_components/Button';

import headerLinks from '../../../data/header';

const StyledPopper = styled(Popper)`
  z-index: 2;
`;

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setIsOpen((open) => !open);

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MenuIcon />
      </Button>

      <StyledPopper
        open={isOpen}
        transition
        disablePortal
        anchorEl={anchorRef.current}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <MenuList component="nav">
                {headerLinks.map(({ title, href }) => (
                  <MenuItem
                    key={title}
                    component={Link}
                    to={href}
                  >
                    {title}
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Fade>
        )}
      </StyledPopper>
    </>
  )
};

export default BurgerButton
