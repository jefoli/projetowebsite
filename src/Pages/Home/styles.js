/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ffffffbd;
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
