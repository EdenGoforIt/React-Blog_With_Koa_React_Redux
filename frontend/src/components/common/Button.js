import React from 'react';
import styled from 'styled-components';
import pallette from '../../lib/styles/pallette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${pallette.gray[8]};
  &:hover {
    background: ${pallette.gray[6]};
  }
`;
const Button = (props) => <StyledButton {...props} />;

export default Button;
