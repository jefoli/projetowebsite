import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    padding: ${theme.spacings.small};

    cursor: pointer;
    border-radius: ${theme.spacings.xxsmall};
    font-size: ${theme.fonts.sizes.small};
    background: -webkit-linear-gradient(to left, #003c58, #493b18);
    background: -o-linear-gradient(to left, #003c58, #493b18);
    background: -moz-linear-gradient(to left, #003c58, #493b18);
    background: linear-gradient(to left, #003c58, #493b18);
    color: ${theme.colors.white};

    &:disabled {
      background: ${theme.colors.mediumGray};
      cursor: not-allowed;
    }
  `}
`;
