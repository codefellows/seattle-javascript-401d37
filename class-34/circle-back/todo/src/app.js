import React from 'react';

import SettingsProvider from './context/settings.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';

export default function App() {

  return (
    <SettingsProvider>
          <ToDo />
    </SettingsProvider>
  );
}

