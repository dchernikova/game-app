import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button } from '@material-ui/core';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Typography from '../../components/Typography';

const NotFoundPage = () => (
  <Layout>
    <Wrapper withVerticalPadding>
      <Typography
        marginBottom={2}
        variant="h1"
        center
        bold
      >
        404
      </Typography>

      <Typography
        marginBottom={2}
        variant="h4"
        center
      >
        Whoops...!
      </Typography>

      <Typography
        marginBottom={2}
        center
      >
        Sorry, we are not able to find what you were looking for
      </Typography>

      <Grid align="center">
        <Button
          to="/"
          size="large"
          component={Link}
          color="secondary"
          variant="contained"
        >
          Back to home
        </Button>
      </Grid>
    </Wrapper>
  </Layout>
);

export default NotFoundPage
