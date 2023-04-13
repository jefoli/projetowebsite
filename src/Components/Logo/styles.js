import styled, { css } from 'styled-components';

export const Img = styled.img`
  ${({ theme }) => css`
    max-width: ${theme.spacings.xxhuge};
    height: auto;
    cursor: default;
  `}
`;
