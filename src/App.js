import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import 'swiper/css/swiper.css';

import ScrollToTop from './helpers/ScrollToTop';
import GlobalStyles from './helpers/GlobalStyles';
import theme from './theme';

import { AuthenticationProvider } from './contexts/Authentication';
import { CartProvider } from './contexts/Cart';

import Layout from './components/Layout';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';
import NotFoundPage from './pages/NotFound';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <AuthenticationProvider>
      <CartProvider>
        <HashRouter basename='/'>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/profile" exact component={ProfilePage} />
              <Route path="/product/:productId" exact component={ProductPage} />
              <Route path="/cart" exact component={CartPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </HashRouter>
      </CartProvider>
    </AuthenticationProvider>
  </ThemeProvider>
);

export default App
