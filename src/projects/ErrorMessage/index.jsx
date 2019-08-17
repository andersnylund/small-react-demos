import React, { useState } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PosedDialog = posed.div({
  hoverable: true,
  open: {
    scale: 1,
  },
  closed: {
    scale: 0,
  },
  hover: {
    scale: 1.1,
  },
});

const Dialog = styled(PosedDialog)`
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
  width: 80%;
  color: #555;
`;

const Triangle = styled.div`
  color: red;
  font-size: 2rem;
`;

const LargeText = styled.div`
  font-size: 1.5rem;
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
    <Wrapper onClick={() => setOpen(true)}>
      <Dialog pose={open ? 'open' : 'closed'}>
        <DialogContent>
          <Triangle>!</Triangle>
          <LargeText>Oh snap!</LargeText>
          <div>An error has occurred while creating an error report.</div>
        </DialogContent>
        <Dismiss
          onClick={e => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          Dismiss
        </Dismiss>
      </Dialog>
      Click anywhere to open dialog
    </Wrapper>
  );
};

export default ErrorMessage;
