import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
    padding: 100px;
    color: ${theme.colors.white};
    background: ${theme.colors.secundaryColor};
    border-radius: ${theme.fonts.sizes.xxsmall};
    font-size: ${theme.fonts.sizes.small};
    width: 390px;

    .wrap-input {
      width: 100%;
      position: relative;
      border-bottom: 2px solid #fff;
      margin-bottom: 37px;
    }

    .input {
      color: #fff;
      line-height: 1.2;
      border: none;
      display: block;
      width: 100%;
      height: 45px;
      background-color: transparent;
      padding: 0 5px;
    }

    .focus-input {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .focus-input::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      width: 0;
      height: 2px;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
      background: -o-linear-gradient(to left, #21d4fd, #b721ff);
      background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
      background: linear-gradient(to left, #21d4fd, #b721ff);
    }

    .focus-input::after {
      content: '';
      font-size: 15px;
      color: #9999;
      line-heigth: 1.2;
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0px;
      padding-left: 5px;

      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after {
      top: -15px;
    }

    .input:focus + .focus-input::before {
      width: 100%;
    }

    .container-login-btn {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 13px;
    }

    .login-form-btn {
      font-size: 15px;
      border: none;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;

      background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
      background: -o-linear-gradient(to left, #21d4fd, #b721ff);
      background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
      background: linear-gradient(to left, #21d4fd, #b721ff);
    }
  `}
`;
