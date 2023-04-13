import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: ${theme.fonts.sizes.xxxsmall} solid ${theme.colors.boxColor};
    background: ${theme.colors.white};
    border-radius: ${theme.fonts.sizes.small};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.large};
  `}
`;
