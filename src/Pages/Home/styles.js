/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0px 15% 0px 15%;
    background: #06060659;
    justify-content: space-around;
    color: white;
    font-weight: bold;
  `}
`;

export const VideoContent = styled.video`
  ${({ theme }) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  `}
`;
