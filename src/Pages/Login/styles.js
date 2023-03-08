import styled, { css } from 'styled-components';

export const Container = styled.div`
  flex-wrap: nowrap;
  text-decoration: none;
  margin-top: 100px;
  min-height: 100vh;
  width: 100%;

  .focus-input {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    color: #adadad;
  }

  .focus-input::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    bottom: -2px;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    background: -webkit-linear-gradient(to left, #003c58, #493b18);
    background: -o-linear-gradient(to left, #003c58, #493b18);
    background: -moz-linear-gradient(to left, #003c58, #493b18);
    background: linear-gradient(to left, #003c58, #493b18);
  }

  .focus-input::after {
    font-size: 15px;
    color: #003c58;
    line-height: 1.2;
    content: attr(data-placeholder);
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

  .has-val + .focus-input::after {
    top: -15px;
  }

  .has-val + .focus-input::before {
    width: 100%;
  }
`;

export const WrapInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
  }
`;

export const FocusInput = styled.input`
  color: #fff;
  line-height: 1.2;
  border: none;
  display: block;
  width: 100%;
  height: 45px;
  background-color: transparent;
  padding: 0 5px;
`;

export const LoginFormTitle = styled.span`
  display: block;
  font-size: 30px;
  color: azure;
  line-height: 1.2;
  text-align: center;

  > img {
    width: 90px;
  }
`;

export const ContainerBtnEnter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 13px;
}
`;

export const BtnEnter = styled.button`
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    scroll-behavior: smooth;
    background: -webkit-linear-gradient(to left, #003c58, #111);
    background: -o-linear-gradient(to left, #003c58, #111);
    background: -moz-linear-gradient(to left, #003c58, #111);
    background: linear-gradient(to left, #003c58, #111);
    cursor: pointer;
  }
`;

export const ContainerTextCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  > span {
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
    text-decoration: none;
  }

  > a {
    font-size: 14px;
    color: #003c58;
    line-height: 1.5;
    text-decoration: none;
  }
`;
