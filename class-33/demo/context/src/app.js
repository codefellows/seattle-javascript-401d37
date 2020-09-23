import React from 'react';

import SettingsProvider from './context/site.js';
import ThemeProvider from './context/theme.js';
import Main from './main.js';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <SettingsProvider>
            <Main />
        </SettingsProvider>
      </ThemeProvider>
    );
  }
}
