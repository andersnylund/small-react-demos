import React, { useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledPanel = styled.div`
  background-image: url(${props => props.background});
  background-attachment: scroll;
  background-origin: padding-box;
  background-position: 50% 50%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: repeat;
  border: 0.3rem solid rgba(0, 0, 0, 0.1);

  color: white;
  font-size: 5rem;
  font-family: Amatic SC, cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;

  flex-grow: ${props => (props.isSelected ? 2 : 1)};

  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.isSelected ? 'space-around' : 'center')};
  align-items: center;

  transition: all 0.5s ease;
`;

const Top = styled.div`
  transition: all 0.5s ease;
  position: ${props => (props.isSelected ? 'inherit' : 'absolute')};
  top: ${props => (props.isSelected ? 'inherit' : '-100%')};
`;
const Bottom = styled.div`
  transition: all 0.5s ease;
  position: ${props => (props.isSelected ? 'inherit' : 'absolute')};
  bottom: ${props => (props.isSelected ? 'inherit' : '100%')};
`;

const Panel = ({ top, middle, bottom, background }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <StyledPanel
      background={background}
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    >
      <Top isSelected={isSelected}>{top}</Top>
      <div>{middle}</div>
      <Bottom isSelected={isSelected}>{bottom}</Bottom>
    </StyledPanel>
  );
};

Panel.propTypes = {
  top: string.isRequired,
  middle: string.isRequired,
  bottom: string.isRequired,
  background: string.isRequired,
};

export default Panel;
