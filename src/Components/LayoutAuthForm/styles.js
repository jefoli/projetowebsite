import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: center;
    padding: ${theme.spacings.medium};
    text-align: center;
  `};
`;

export const Wrapper = styled.div`
    flex-wrap: nowrap;
    text-decoration: none;
    margin-top: 100px;
    min-height: 100vh;
    width: 100%;
`;

export const WrapperLogin = styled.div`
  justify-content: center;
  width: 390px;
  background-color: #967931;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0 0.2);

`;

export const WrapInput = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    border-bottom: calc(${theme.spacings.xxsmall} - 0.2rem) solid #adadad;
    margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const FocusInput = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    line-height: 1.2;
    border: none;
    display: block;
    width: 100%;
    height: ${theme.spacings.xxlarge};
    background-color: transparent;
    padding: 0 ${theme.fonts.sizes.xxsmall};
  `}
`;

export const LoginFormTitle = styled.h2`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fonts.sizes.large};
    color: ${theme.colors.white};
    line-height: 1.2;
    text-align: center;
    width: 100%;
  `}
`;

export const BtnEnter = styled.button`
    ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.small};
      border: none;
      border-radius: ${theme.fonts.sizes.xsmall};
      color: ${theme.colors.white};
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: ${theme.spacings.xxlarge};
      scroll-behavior: smooth;
      background: ${theme.colors.backgroundGradientLeft};
      cursor: pointer;
    `}
  }
`;

export const ContainerTextCenter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacings.xxlarge};
    font-size: ${theme.fonts.sizes.small};

    > span {
      color: ${theme.colors.mediumGray};
      padding-right: ${theme.spacings.xsmall};
    }

    > a {
      color: ${theme.colors.primaryColor};
    }
  `}
`;
