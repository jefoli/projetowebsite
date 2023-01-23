import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: darkblue;
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }
`;
