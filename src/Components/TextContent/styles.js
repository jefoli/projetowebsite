/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 30px;
    font-size: ${theme.fonts.sizes.medium};
  `}
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;
