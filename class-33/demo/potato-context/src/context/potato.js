import React, { useState } from 'react';

export const PotatoContext = React.createContext();

function PotatoProvider(props) {

  const statii = ['raw','fried','baked','salad'];

  const [status, setStatus] = useState('raw');


  const cycleStatus = () => {

    const curIndex = statii.indexOf(status);

    const newIndex = (curIndex + 1) % statii.length;

    setStatus(statii[newIndex]);

  };

  const state = {
    status,
    cycleStatus,
  };

  return (
    <PotatoContext.Provider value={state}>
      {props.children}
    </PotatoContext.Provider>
  );
}

export default PotatoProvider;
