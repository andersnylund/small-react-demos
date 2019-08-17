import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Wave } from './wave.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledWave = styled(Wave)`
  width: 100%;
  #gradient-start {
    stop-color: hsl(30, 17%, 63%);
    stop-opacity: 1;
  }
  #gradient-stop {
    stop-color: hsl(10, 17%, 53%);
    stop-opacity: 1;
  }
`;

const Svg = () => {
  return (
    <Container>
      <StyledWave />
    </Container>
  );
};

export default Svg;
