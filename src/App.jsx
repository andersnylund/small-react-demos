import React from 'react';
import { Router, Link } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

import DrumKit from './challenges/drumkit';

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
    <Link to="/drumkit">Drumkit</Link>
    <Router>
      <DrumKit path="/drumkit" />
    </Router>
  </>
);

export default App;
