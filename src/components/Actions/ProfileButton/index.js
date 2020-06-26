import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import Button from './../_components/Button';

import { useAuthentication } from '../../../contexts/Authentication';

const ProfileButton = () => {
  const history = useHistory();
  const { setUser, isLogged } = useAuthentication();

  const handleSuccess = (response) => {
    setUser(response.profileObj);
    history.push('/profile');
  };

  const handleFailure = (response) => console.error(response);

  return (
    <>
      {isLogged ? (
        <Button
          to="/profile"
          component={Link}
        >
          <PersonOutlineIcon />
        </Button>
      ) : (
        <GoogleLogin
          clientId="153231177102-ogdiu0sjtjhrul8e1nst0jkl3jhnterb.apps.googleusercontent.com"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          render={renderProps => (
            <Button onClick={renderProps.onClick}>
              <PersonOutlineIcon />
            </Button>
          )}
        />
      )}
    </>
  )
};

export default ProfileButton
