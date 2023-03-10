import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: none;
    padding: ${theme.spacings.small};

    cursor: pointer;
    border-radius: ${theme.spacings.xxsmall};
    font-size: ${theme.fonts.sizes.small};
    background: ${theme.colors.backgroundGradientLeft};
    color: ${theme.colors.white};

    &:disabled {
      background: ${theme.colors.mediumGray};
      cursor: not-allowed;
    }
  `}
`;
