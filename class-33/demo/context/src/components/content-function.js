import React, { useContext } from 'react';
import { SettingsContext } from '../context/site.js';
import { ThemeContext } from '../context/theme.js';
import { PotatoContext } from '../context/potato.js';

function Content(props) {
  // when you want to use multiple contexts in a function component
  // simply use multiple useContext() calls to initiate them
  const siteContext = useContext(SettingsContext);
  const themeContext = useContext(ThemeContext);
  const potatoContext = useContext(PotatoContext);

  return (
    <div>
      <strong>Rendered via Function Component</strong>
      <h1>{siteContext.title}</h1>
      <button onClick={() => potatoContext.cycleStatus()}>Potato status: {potatoContext.status}</button>
      <div>
        <a href={`http://www.twitter.com/${siteContext.twitter}`}>
          @{siteContext.twitter}
        </a>
      </div>

      <hr />

      <h2>Current Mode: {themeContext.mode}</h2>
    </div>
  );
}

export default Content;
