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
      border: 1px;
      font-size: 15px;
    }

    button {
      width: 100%;
      background: #003c58;
      color: ${theme.colors.white};
      border: none;
      padding: 15px 30px;
      cursor: pointer;
      border-radius: 4px;

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
