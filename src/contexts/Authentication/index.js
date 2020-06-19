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

  const fetchData = () => setState(storage.getItem('user'));

  const userData = state;

  const setUserData = (data) => {
    storage.setItem('user', data);
    fetchData();
  };

  const removeUserData = () => {
    storage.removeItem('user', {});
    fetchData();
  };

  const isLogged = userData && Object.keys(userData).length !== 0;

  return ({
    userData,
    setUserData,
    removeUserData,
    fetchData,
    isLogged,
  })
};

export { AuthenticationProvider, useAuthentication }
