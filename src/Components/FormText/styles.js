import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: 4px;
    margin-top: 30px;

    label {
      font-size: 20px;
      padding: 10px;
      text-align: left;
    }

    input {
      padding: 10px;
      margin-bottom: 20px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid;
      font-size: 15px;
    }

    button {
      padding: 10px;
      width: 10%;
      border-radius: 4px;
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      border: none;
      cursor: pointer;
      font-size: 15px;

      &:focus {
        background: gray;
        transition: all 50ms;
      }
    }
  `}
`;

export const InputBox = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 200px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid;
`;
