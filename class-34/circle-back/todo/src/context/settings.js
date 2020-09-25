import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {

  const [maxVisible, setMaxVisible] = useState(3);
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <SettingsContext.Provider value={{ maxVisible, setMaxVisible, showCompleted, setShowCompleted}}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default Settings;
