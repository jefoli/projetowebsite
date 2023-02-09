import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
    margin-top: 50px;
    background: none;

    label {
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.xsmall};
      text-align: left;
    }

    input {
      padding: 10px;
      margin-bottom: 20px;
      width: 100%;
      border-radius: ${theme.fonts.sizes.xxsmall};
      border: 1px solid ${theme.colors.secundaryColor};
    }

    button {
      min-width: 60px;
      color: ${theme.colors.white};
      border: none;
      padding: 15px;
      cursor: pointer;
      border-radius: ${theme.fonts.sizes.xxsmall};
      background: -webkit-linear-gradient(to right, #003c58, #493b18);
      background: -o-linear-gradient(to right, #003c58, #493b18);
      background: -moz-linear-gradient(to right, #003c58, #493b18);
      background: linear-gradient(to right, #003c58, #493b18);
      color: white;
      &:focus {
        background: gray;
        transition: all 50ms;
      }
    }
  `}
`;

export const InputBox = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    min-height: 200px;
    padding: 0.625rem;
    margin-bottom: 0.5rem;
    resize: vertical;
    border: 1px solid ${theme.colors.secundaryColor};
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}

  >:focus {
    outline: 0;
  }
`;
