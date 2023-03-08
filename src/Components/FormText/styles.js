import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
    margin-top: 50px;
    background: none;
  `}
`;

export const LabelText = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.xsmall};
    text-align: left;
  `}
`;

export const InputArea = styled.input`
  ${({ theme }) => css`
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: ${theme.fonts.sizes.xxsmall};
    border: 1px solid ${theme.colors.secundaryColor};
  `}
`;

export const BtnSubmit = styled.button`
  ${({ theme }) => css`
    font-size: 15px;
    border: none;
    border-radius: 4px;
    color: ${theme.colors.white};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    min-width: 60px;
    height: 30px;
    padding: 20px;
    background: -webkit-linear-gradient(to left, #003c58, #111);
    background: -o-linear-gradient(to left, #003c58, #111);
    background: -moz-linear-gradient(to left, #003c58, #111);
    background: linear-gradient(to left, #003c58, #111);
    cursor: pointer;

    &:focus {
      background: gray;
      transition: all 50ms;
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
