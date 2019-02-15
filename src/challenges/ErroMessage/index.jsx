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

const Button = styled.button`
  visibility: ${props => (props.open ? 'hidden' : '')};
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
      <Dialog pose={open ? 'open' : 'closed'}>
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
