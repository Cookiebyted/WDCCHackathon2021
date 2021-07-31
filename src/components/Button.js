import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  color: black;
  background-color: white;

  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  display: inline-block;

  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  
  cursor: pointer;
`

function Button({ buttonText, clickAction }) {
  return (
    <StyledButton onClick={clickAction}>{buttonText}</StyledButton>
  );
}

export default Button;
