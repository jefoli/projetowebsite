/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    font-size: ${theme.fonts.sizes.small};
  `}
`;

export const GridContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  `}
`;
