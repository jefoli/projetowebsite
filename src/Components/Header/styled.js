import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    padding: 15px;
    background: ${theme.colors.white};
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    a {
      font-size: 20px;
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      padding: 0px 0px 0px 40px;
    }

    a:hover {
      color: #118d93;
      transition: 150ms ease-in-out;
    }
  `}
`;
