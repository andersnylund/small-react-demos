import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  flex-grow: ${props => (props.isSelected ? 2 : 1)};
  color: white;
  font-size: 3rem;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;
`;

const Panel = ({ top, middle, bottom, background }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Div
      background={background}
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      {middle}
    </Div>
  );
};

export default Panel;
