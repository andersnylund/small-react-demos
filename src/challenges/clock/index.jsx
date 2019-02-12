import React, { useState } from 'react';
import styled from 'styled-components';

import useInterval from './useInterval';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ClockFrame = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 0.5rem solid black;
`;

const Hand = styled.div`
  background: black;
  height: ${props => props.length};
  width: 0.2rem;
  transform: rotate(${props => props.degrees}deg);
  transform-origin: bottom;
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  position: absolute;
  right: 50%;
  bottom: 50%;
`;

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useInterval(() => {
    setNow(new Date());
  }, 1000);

  const hourDegrees = (now.getHours() / 12) * 360;
  const minuteDegrees = (now.getMinutes() / 60) * 360;
  const secondDegrees = (now.getSeconds() / 60) * 360;

  return (
    <Wrapper>
      <ClockFrame>
        <Hand length="6rem" degrees={hourDegrees} />
        <Hand length="8rem" degrees={minuteDegrees} />
        <Hand length="9rem" degrees={secondDegrees} />
      </ClockFrame>
    </Wrapper>
  );
};

export default Clock;
