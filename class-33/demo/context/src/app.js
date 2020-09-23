import React from 'react';

import SettingsProvider from './context/site.js';
import ThemeContext from './context/theme.js';
import PotatoProvider from './context/potato';
import Main from './main.js';
import './app.scss';

export default class App extends React.Component {
  render() {
    console.log('SettingsProvider', SettingsProvider);
    return (
      <ThemeContext>
        <SettingsProvider>
          <PotatoProvider>
            <Main />
          </PotatoProvider>
        </SettingsProvider>
      </ThemeContext>
    );
  }
}
