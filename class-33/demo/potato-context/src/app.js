import React, { useState } from 'react';
import PotatoWrapper from './components/potato-wrapper';
import PotatoProvider from './context/potato';

import './app.scss';

export default function App() {

    return (
      <>
      <h1>Potato Context Demo</h1>
      <PotatoProvider>
        <PotatoWrapper />
      </PotatoProvider>

      </>

    );
  }

