/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    .login-form-btn {
      font-size: 15px;
      border: none;
      border-radius: 4px;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      padding: 20px;
      background: -webkit-linear-gradient(to left, #003c58, #111);
      background: -o-linear-gradient(to left, #003c58, #111);
      background: -moz-linear-gradient(to left, #003c58, #111);
      background: linear-gradient(to left, #003c58, #111);
    }

    .login-form-btn:hover {
      cursor: pointer;
    }

    > a {
      text-decoration: none;
    }
  `}
`;
