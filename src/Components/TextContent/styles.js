/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 30px;
    font-size: ${theme.fonts.sizes.medium};
    @media ${theme.media.lteMedium};
  `}
`;

export const GridContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    @media ${theme.media.lteMedium};
  `}
`;
