import styled, { css } from 'styled-components';

export const InputArea = styled.input`
  ${({ theme }) => css`
    padding: calc(${theme.spacings.xsmall} + 0.2rem);
    margin-bottom: ${theme.spacings.medium};
    width: 100%;
    border-radius: ${theme.fonts.sizes.xxsmall};
    border: 1px solid ${theme.colors.secundaryColor};
  `}
`;
