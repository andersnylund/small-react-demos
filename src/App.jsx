import React from 'react';
import { Router } from '@reach/router';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

import DrumKit from './challenges/drumkit';
import Clock from './challenges/clock';
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
