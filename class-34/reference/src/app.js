import React from 'react';

import LoginProvider from './components/auth/context.js';
import SettingsProvider from './context/settings.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <LoginProvider>
          <ToDo />
        </LoginProvider>
      </SettingsProvider>
    );
  }
}
