/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    .container-login {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-wrap: center;
      justify-content: center;
      padding: 15px;
      text-align: center;
    }

    .wrap-login {
      justify-content: center;
      width: 390px;
      background-color: #967931;
      border-radius: 10px;
      overflow: hidden;
      padding: 77px 55px 33px 55px;
      box-shadow: 0 5px 10px 0px rgba(0, 0, 0 0.2);
    }
  `};
`;
