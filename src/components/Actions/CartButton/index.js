import React, { useEffect, useState } from 'react';

import { Badge } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import styled from 'styled-components';

import Button from './../_components/Button';

import { useCart } from '../../../contexts/Cart';

const StyledBadge = styled(Badge)`
  & > .MuiBadge-badge {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

const CartButton = () => {
  const [count, setCount] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    if (cart) {
      setCount(cart.length);
    }
  }, [cart]);

  return (
    <Button href="/cart">
      <StyledBadge badgeContent={count}>
        <ShoppingBasketIcon />
      </StyledBadge>
    </Button>
  )
};

export default CartButton
