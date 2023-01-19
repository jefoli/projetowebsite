import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .button {
      width: 100%;
      background: ${theme.colors.primaryColor};
      color: white;
      border: none;
      padding: 15px;
      cursor: pointer;
    }

    .button:disabled {
      background: #888;
      cursor: not-allowed;
    }
  `}
`;
