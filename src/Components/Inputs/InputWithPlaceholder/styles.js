import styled, { css } from 'styled-components';

export const WrapInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    border-bottom: calc(${theme.spacings.xxsmall} - 0.2rem) solid #adadad;
    margin-bottom: ${theme.spacings.large};
    }

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
