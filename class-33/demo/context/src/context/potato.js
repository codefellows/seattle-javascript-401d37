import React, { useState } from 'react';

export const PotatoContext = React.createContext();

function PotatoProvider(props) {

  const [status, setStatus] = useState('raw');

  const cycleStatus = () => {
    const statii = ['raw','fried','baked','salad'];

    const curIndex = statii.indexOf(status);

    const nextIndex = (curIndex + 1) % statii.length;

    setStatus(statii[nextIndex]);
  }

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
