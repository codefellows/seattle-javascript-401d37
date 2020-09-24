import React, { useContext, useState } from 'react';
import { LoginContext } from './context.js';

import { If, Then, Else } from 'react-if';

const Login = (props) => {

  const context = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    context.login(username, password);
  };

  return (
    <>
      <If condition={context.loggedIn}>
        <Then>
          <button onClick={context.logout}>Log Out</button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
        </Else>
      </If>
    </>
  );
};

export default Login;
