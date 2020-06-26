import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { Button } from '@material-ui/core';

import { useAuthentication } from '../../../contexts/Authentication';

const LogoutButton = () => {
  const history = useHistory();
  const { removeUser } = useAuthentication();

  const handleLogout = () => {
    removeUser();
    history.push('/')
  };

  return (
    <GoogleLogout
      clientId="153231177102-ogdiu0sjtjhrul8e1nst0jkl3jhnterb.apps.googleusercontent.com"
      onLogoutSuccess={handleLogout}
      render={renderProps => (
        <Button
          fullWidth
          size="large"
          color="secondary"
          variant="contained"
          onClick={renderProps.onClick}
        >
          Log out
        </Button>
      )}
    />
  )
};

export default LogoutButton
