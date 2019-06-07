import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    text-decoration: none;
    color: inherit;
    color: #555;
  }
`;

const PosedContent = posed.section({
  after: { y: 0, opacity: 1 },
  before: { y: -50, opacity: 0 },
});

const Content = styled(PosedContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  text-align: center;
  height: 3rem;
`;

const Home = () => (
  <Wrapper>
    <Content pose="after" initialPose="before">
      <h1>Small React Demos</h1>
      <p>
        Stuff built by me with the aim to learn CSS&nbsp;
        <span role="img" aria-label="stars">
          ✨
        </span>
      </p>
      <p>
        Ideas are from&nbsp;
        <a href="https://javascript30.com/">JavaScript30</a>
        &nbsp;course and&nbsp;
        <a href="https://100dayscss.com/">100 Days CSS Challenge</a>
      </p>
    </Content>
    <Footer>
      <a href="https://www.github.com/andersnylund/javascript30-with-react">
        Made with&nbsp;
        <span role="img" aria-label="blue-hearth">
          💙
        </span>
        by Anders Nylund
      </a>
    </Footer>
  </Wrapper>
);

export default Home;
