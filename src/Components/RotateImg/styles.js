import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
0%{
  transform: translate(0) rotate(360deg);
}
//comece em 0 e vá até 360deg
100%{
  transform: translate(360deg) rotate(0);
}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    display: block;
    width: 100%;
    animation: ${rotate()} 5s linear infinite;
    background: none;
  `}
`;
