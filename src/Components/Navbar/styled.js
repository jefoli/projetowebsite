import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    background: ${theme.colors.white};
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: space-evenly;
    padding: 15px 30px 10px;

    a {
      font-size: 20px;
      color: ${theme.colors.primaryColor};
      text-decoration: none;
    }

    a:hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
    }
  `}
`;
