import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex-wrap: nowrap;
    text-decoration: none;
    margin-top: 100px;
    min-height: 100vh;
    width: 100%;

    .focus-input {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      color: ${theme.colors.mediumGray};
    }

    .focus-input::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      bottom: -2px;
      height: 2px;
      transition: all 0.4s;
      background: ${theme.colors.backgroundGradientLeft};
    }

    .focus-input::after {
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.primaryColor};
      line-height: 1.2;
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: ${theme.spacings.small};
      left: 0px;
      padding-left: ${theme.spacings.xxsmall};
      transition: all 0.4s;
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after {
      top: -${theme.spacings.xsmall};
    }

    .input:focus + .focus-input::before {
      width: 100%;
    }

    .has-val + .focus-input::after {
      top: -${theme.spacings.xsmall};
    }

    .has-val + .focus-input::before {
      width: 100%;
    }
  `}
`;

export const WrapInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    border-bottom: calc(${theme.spacings.xxsmall} - 0.2rem) solid #adadad;
    margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const FocusInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: ${theme.spacings.xxlarge};
    background-color: transparent;
    padding: 0 ${theme.fonts.sizes.xxsmall};
  `}
`;

export const LoginFormTitle = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    line-height: 1.2;
    text-align: center;
    width: 100%;
  `}
`;

export const BtnEnter = styled.button`
    ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.small};
      border: none;
      border-radius: ${theme.fonts.sizes.xsmall};
      color: ${theme.colors.white};
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: ${theme.spacings.xxlarge};
      scroll-behavior: smooth;
      background: ${theme.colors.backgroundGradientLeft};
      cursor: pointer;
    `}
  }
`;

export const ContainerTextCenter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.xxlarge};

    > span {
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.mediumGray};
      line-height: 1.5;
      padding-right: ${theme.spacings.xsmall};
      text-decoration: none;
    }

    > a {
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.primaryColor};
      line-height: 1.5;
      text-decoration: none;
    }
  `}
`;
