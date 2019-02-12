import React from 'react';
import styled from 'styled-components';
import Instrument from './Instrument';

const Wrapper = styled.div`
  background: url('https://i.imgur.com/b9r5sEL.jpg') bottom center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DrumKit = () => {
  return (
    <Wrapper>
      <Instrument keyboardKey="a" instrument="clap" />
      <Instrument keyboardKey="s" instrument="hihat" />
      <Instrument keyboardKey="d" instrument="kick" />
      <Instrument keyboardKey="f" instrument="openhat" />
      <Instrument keyboardKey="g" instrument="boom" />
      <Instrument keyboardKey="h" instrument="ride" />
      <Instrument keyboardKey="j" instrument="snare" />
      <Instrument keyboardKey="k" instrument="tom" />
      <Instrument keyboardKey="l" instrument="tink" />
    </Wrapper>
  );
};

export default DrumKit;
