import React from 'react';

import Auth from './components/auth/auth.js';

const Content = (props) => {

  return (

    <>
      <Auth>
        <div>You are logged in!</div>
      </Auth>

      <Auth capability="update">
        <div>You can edit ...</div>
      </Auth>

      <Auth capability="delete">
        <div>You can delete ...</div>
      </Auth>
    </>

  );
};

export default Content;
