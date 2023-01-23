import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background: #003c58;
    color: ${theme.colors.white};
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    border-radius: 4px;

    &:disabled {
      background: ${theme.colors.mediumGray};
      cursor: not-allowed;
    }
  `}
`;
