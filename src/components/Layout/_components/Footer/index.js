import React from 'react';

import styled from 'styled-components';

import { Box, Grid } from '@material-ui/core';

import bg from './../../../../assets/footer-bg.jpg';

import footerLinks from './../../../../data/footer';

import Wrapper from '../../../Wrapper';
import Typography from '../../../Typography';

import CartButton from '../../../Actions/CartButton';
import TwitterButton from '../../../Actions/TwitterButton';
import FacebookButton from '../../../Actions/FacebookButton';
import ProfileButton from '../../../Actions/ProfileButton';

import Logo from '../Logos/Steam';
import Link from '../Link';

import ValveLegal from './_components/ValveLegal';

const Content = styled(Box)`
  padding: 40px 0 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${bg}) no-repeat center / cover;
`;

const List = styled.ul`
  padding: 0;
  margin: 8px 0;

  list-style-type: none;
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = () => (
  <Content component="footer">
    <Wrapper>
      <Box marginBottom={2}>
        <Logo withText />
      </Box>

      <Typography>
        The ultimate entertainment platform. Play, connect, create and more. Install Steam today and start gaming!
      </Typography>

      <Box marginY={4}>
        <Grid container>
          {footerLinks.map(({ title, items }) => (
            <Grid key={title} item xs={12} md={3}>
              <List>
                <li>
                  <Typography
                    uppercase
                    variant="h6"
                    color="secondary"
                    marginBottom={1}
                  >
                    {title}
                  </Typography>
                </li>

                {items.map(({ text, href }) => (
                  <li key={text}>
                    <Link href={href} noPadding>
                      {text}
                    </Link>
                  </li>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>

      <StyledBox marginY={4}>
        <Box>
          <ProfileButton />
          <CartButton />
        </Box>

        <Box>
          <TwitterButton />
          <FacebookButton />
        </Box>
      </StyledBox>
    </Wrapper>

    <ValveLegal />
  </Content>
);

export default Footer
