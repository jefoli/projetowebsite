import styled, { css } from 'styled-components';

export const FocusSpan = styled.span`
${({ theme }) => css`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    color: ${theme.colors.mediumGray};
    font-weight: 400;

    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      width: 0;
      bottom: calc(-${theme.fonts.sizes.xxsmall} + ${theme.fonts.sizes.xxxsmall});
      height: calc(${theme.fonts.sizes.xxsmall} - ${theme.fonts.sizes.xxxsmall});
      transition: all 0.4s;
      background: ${theme.colors.backgroundGradientGray};
    }

    ::after {
      font-size: ${theme.fonts.sizes.small};
      color: ${theme.colors.primaryColor};
      line-height: ${theme.fonts.sizes.large};
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

    .input:focus + &::after {
      top: -${theme.spacings.xsmall};
    }

    .input:focus + &::before {
      width: 100%;
    }

    .has-val + &::after {
      top: -${theme.spacings.xsmall};
    }

    .has-val + &::before {
      width: 100%;
    }

  `}
`;

export const WrapInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    border-bottom: calc(${theme.spacings.xxsmall} - 0.2rem) solid ${theme.colors.mediumGray};
    margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const FocusInput = styled.input`
  ${({ theme }) => css`
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: ${theme.spacings.xxlarge};
    background-color: transparent;
    padding: 0 ${theme.fonts.sizes.xxsmall};
  `}
`;
