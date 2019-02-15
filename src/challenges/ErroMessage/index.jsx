import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled.button`
  visibility: ${props => (props.open ? 'hidden' : '')};
`;

const Dialog = styled.div`
  @keyframes open {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  animation-duration: 0.5s;
  animation-name: open;

  /* transition: transform 0.3s cubic-bezier(0.62, 0.35, 0.48, 1.4);
  transform: scale(${props => (props.open ? '1' : '0')}); */
  margin: 2rem;
  height: 15rem;
  width: 20rem;
  border-radius: 0.3rem;
  box-shadow: 6px 6px 22px 0px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  text-align: center;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Triangle = styled.div`
  color: red;
  font-size: 2rem;
`;

const Text = styled.div`
  color: #555;
  span {
    display: block;
    font-size: 1.5rem;
  }
  width: 75%;
`;

const Dismiss = styled.div`
  :hover {
    opacity: 0.8;
  }
  background-color: red;
  color: white;
  padding: 0.5rem;
  font-weight: 100;
  width: 100%;
  cursor: pointer;
`;

const ErrorMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Dialog open={open}>
        <DialogContent>
          <Triangle>!</Triangle>
          <Text>
            <span>Oh snap!</span>
            An error has occurred while creating an error report.
          </Text>
        </DialogContent>
        <Dismiss onClick={() => setOpen(false)}>Dismiss</Dismiss>
      </Dialog>
      <Button type="button" onClick={() => setOpen(true)} open={open}>
        Open dialog
      </Button>
    </Wrapper>
  );
};

export default ErrorMessage;
