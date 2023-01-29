import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
    margin-top: 50px;

    label {
      font-size: ${theme.fonts.sizes.medium};
      padding: ${theme.spacings.xsmall};
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
      background: ${theme.colors.primaryColor};
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
    min-height: 150px;
    font-size: ${theme.fonts.sizes.xsmall};
    border: 1px solid;
    resize: vertical;
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}
`;
