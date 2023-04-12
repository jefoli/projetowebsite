import styled, { css } from 'styled-components';

export const Container = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.fonts.sizes.medium} + 0.3rem);
    font-weight: 400;
    padding: ${theme.spacings.small};
    color: ${theme.colors.black};
  `}
`;
