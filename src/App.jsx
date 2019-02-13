import React from 'react';
import { Router } from '@reach/router';
import styled, { createGlobalStyle } from 'styled-components';
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
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const StyledRouter = styled(Router)`
  height: 100%;
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
    <Layout>
      <NavBar challenges={challenges} />
      <Content>
        <StyledRouter>
          <Home path="/" />
          {challenges.map(({ Component, path, name }) => (
            <Component path={path} key={name} />
          ))}
        </StyledRouter>
      </Content>
    </Layout>
  </>
);

export default App;
