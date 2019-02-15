import React, { useState } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledPanel = styled.div`
  background-image: url(${props => props.background});
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgb(107, 15, 156);
  background-origin: padding-box;
  background-position: 50% 50%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: repeat;
  background-size: cover;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 5px inset;

  overflow: hidden;

  color: white;
  font-size: ${props => (props.isSelected ? '7rem' : '5rem')};
  font-family: Amatic SC, cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  text-transform: uppercase;

  flex-grow: ${props => (props.isSelected ? 2 : 1)};

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;

  transition: all 0.5s ease;
`;

const Top = styled.div`
  font-size: 5rem;
  transition: all 0.5s ease;
  transition-delay: 0.3s;
  transform: ${props => (props.isSelected ? '' : 'translateY(-300%)')};
`;
const Bottom = styled.div`
  font-size: 5rem;
  transition: all 0.5s ease;
  transition-delay: 0.3s;
  transform: ${props => (props.isSelected ? '' : 'translateY(300%)')};
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
