import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-radius: ${theme.fonts.sizes.xxsmall};
    margin-top: ${theme.spacings.xxlarge};
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
    padding: calc(${theme.spacings.xsmall} + 0.2rem);
    margin-bottom: ${theme.spacings.medium};
    width: 100%;
    border-radius: ${theme.fonts.sizes.xxsmall};
    border: 1px solid ${theme.colors.secundaryColor};
  `}
`;

export const BtnSubmit = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: calc(${theme.fonts.sizes.small} - 0.1rem);
    min-width: calc(${theme.spacings.huge} + 0.6rem);
    height: ${theme.spacings.large};
    padding: ${theme.spacings.medium};
    border: none;
    border-radius: ${theme.spacings.xxsmall};
    background: ${theme.colors.backgroundGradientLeft};
    color: ${theme.colors.white};
    text-transform: uppercase;
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
    height: 150px;
    min-height: 100px;
    max-height: 300px;
    padding: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};
    resize: vertical;
    border: 1px solid ${theme.colors.secundaryColor};
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}

  >:focus {
    outline: 0;
  }
`;
