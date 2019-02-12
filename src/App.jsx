import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

import DrumKit from './challenges/drumkit';
import Clock from './challenges/clock';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <DrumKit path="/drumkit" />
      <Clock path="/clock" />
    </Router>
  </>
);

export default App;
