import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    margin: ${theme.spacings.xhuge};
    line-height: ${theme.fonts.sizes.xxxhuge};
  `}
`;
