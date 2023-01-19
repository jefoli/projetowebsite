/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 30px;
    font-size: ${theme.fonts.sizes.medium};
  `}
`;
