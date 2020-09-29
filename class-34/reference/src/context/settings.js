import React from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  const state = {
    maxVisible: 3,
    showCompleted: true,
  };

  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
