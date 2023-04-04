import styled, { css } from 'styled-components';

export const LabelText = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.xsmall};
    text-align: left;
    font-weight: 500;
  `}
`;
