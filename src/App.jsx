import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import 'typeface-amatic-sc';

import DrumKit from './challenges/Drumkit';
import Clock from './challenges/Clock';
import FlexPanel from './challenges/FlexPanel';
import NavBar from './NavBar';
import Home from './Home';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --navbar-height: 3rem;
  }

`;

const challenges = [
  {
    Component: DrumKit,
    path: '/drumkit',
    name: 'Drumkit',
  },
  {
    Component: Clock,
    path: '/clock',
    name: 'Clock',
  },
  {
    Component: FlexPanel,
    path: '/flex-panel',
    name: 'Flex Panel',
  },
];

const App = () => (
  <>
    <GlobalStyle />
    <NavBar challenges={challenges} />
    <Router>
      <Home path="/" />
      {challenges.map(({ Component, path, name }) => (
        <Component path={path} key={name} />
      ))}
    </Router>
  </>
);

export default App;
