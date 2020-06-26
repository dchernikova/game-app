import React, { useContext, useState } from 'react';

import useStorage from '../_utils/useStorage';

const AuthenticationContext = React.createContext({});

const storage = useStorage();

const AuthenticationProvider = (props) => {
  const [state, setState] = useState(storage.getItem('user') || storage.setItem('user', {}));

  return (
    <AuthenticationContext.Provider value={[state, setState]}>
      {props.children}
    </AuthenticationContext.Provider>
  )
};

const useAuthentication = () => {
  const [state, setState] = useContext(AuthenticationContext);

  const fetchUser = () => setState(storage.getItem('user'));

  const user = state;

  const setUser = (data) => {
    storage.setItem('user', data);
    fetchUser();
  };

  const removeUser = () => {
    storage.removeItem('user', {});
    fetchUser();
  };

  const isLogged = user && Object.keys(user).length !== 0;

  return ({
    user,
    setUser,
    removeUser,
    fetchUser,
    isLogged,
  })
};

export { AuthenticationProvider, useAuthentication }
