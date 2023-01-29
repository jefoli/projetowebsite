import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: ${theme.spacings.xxsmall};

    &:disabled {
      background: ${theme.colors.mediumGray};
      cursor: not-allowed;
    }
  `}
`;
