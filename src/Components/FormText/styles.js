import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
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
      border: 1px solid;
      font-size: 15px;
      border-radius: ${theme.fonts.sizes.xxsmall};
    }

    button {
      min-width: 60px;
      background: #003c58;
      color: ${theme.colors.white};
      border: none;
      padding: 15px;
      cursor: pointer;
      border-radius: ${theme.fonts.sizes.xxsmall};

      &:focus {
        background: gray;
        transition: all 50ms;
      }
    }
  `}
`;

export const InputBox = styled.input`
  ${({ theme }) => css`
    padding: 0.625rem;
    display: block;
    width: 100%;
    min-height: 200px;
    font-size: 20px;
    border: 1px solid;
    resize: vertical;
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}
`;
