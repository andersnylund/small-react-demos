/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import sounds from './sounds';

const isPlayingStyle = `
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
`;

const Button = styled.button`
  border-color: #000;
  border-width: 0.3rem;
  border-style: solid;
  border-radius: 0.5rem;
  width: 6rem;
  transition: all 0.07s ease;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.5rem;

  ${props => (props.isPlaying ? isPlayingStyle : '')}
`;

const Key = styled.div`
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
`;

const InstrumentName = styled.div`
  text-transform: uppercase;
  color: #ffc600;
  font-size: 0.8rem;
`;

const handleKeyPress = (event, keyboardKey, play) => {
  if (event.key === keyboardKey) {
    play();
  }
};

const Instrument = ({ keyboardKey, instrument }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 200);
  };

  useEffect(() => {
    document.addEventListener('keydown', event =>
      handleKeyPress(event, keyboardKey, play)
    );

    return () => {
      document.removeEventListener('keydown', event =>
        handleKeyPress(event, keyboardKey, play)
      );
    };
  });

  return (
    <Button isPlaying={isPlaying} onClick={play} type="button">
      {isPlaying && <audio src={sounds[instrument]} autoPlay />}
      <Key>{keyboardKey}</Key>
      <InstrumentName>{instrument}</InstrumentName>
    </Button>
  );
};

Instrument.propTypes = {
  keyboardKey: string.isRequired,
  instrument: string.isRequired,
};

export default Instrument;
