/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 30px;
    font-size: ${theme.fonts.sizes.medium};
  `}
`;

const rotate = () => keyframes`
0%{
  transform: translate() rotate(0deg);
}
//comece em 0 e vá até 360deg
100%{
  transform: translate(0) rotate(360deg);
}
`;

export const RotateImage = styled.div`
  display: block;
  width: 100%;
  animation: ${rotate()} 3s ease-out infinite;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-auto-rows: 100px; */
`;
