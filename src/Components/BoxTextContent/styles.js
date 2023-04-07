import styled, { css } from 'styled-components';

export const Container = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.fonts.sizes.medium} + 0.3rem);
    font-weight: 300;
    padding: 15px;
  `}
`;
