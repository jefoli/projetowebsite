/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
0%{
  transform: translate(-50%, -50%) rotate(0deg);
}
100%{
  transform: translate(-50%, -50%) rotate(360deg);
}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background: ${theme.colors.primaryColor};

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      border-width: ${theme.spacings.xxsmall};
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &:after {
      width: 6rem;
      height: 6rem;
      border-left: ${theme.spacings.xxsmall} solid ${theme.colors.white};
      border-top: ${theme.spacings.xxsmall} solid ${theme.colors.white};
      animation: ${rotate()} 900ms reverse ease-in-out infinite;
    }

    &:before {
      width: 2rem;
      height: 2rem;
      border-left: ${theme.spacings.xxsmall} solid ${theme.colors.white};
      border-top: ${theme.spacings.xxsmall} solid ${theme.colors.white};
      animation: ${rotate()} 1s ease-in-out infinite;
    }
  `}
`;
