import React from 'react';

import styled from 'styled-components';

import Header from './_components/Header';
import Footer from './_components/Footer';

const Main = styled.main`
  overflow: hidden;
  
  display: flex;
  flex-direction: column;

  position: relative;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.color.blue};
`;

const Content = styled.div`
  flex-grow: 1;
`;

const Layout = ({ children }) => (
  <Main>
    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </Main>
);

export default Layout
