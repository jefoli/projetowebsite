import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.primaryColor};
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;

    &:disabled {
      background: #888;
      cursor: not-allowed;
    }
  `}
`;
