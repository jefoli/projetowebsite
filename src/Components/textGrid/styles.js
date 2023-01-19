import styled, { css } from 'styled-components';
export const Container = styled.div`
  text-align: center;
  font-size: 30px;
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.fonts.sizes.medium};
  `};
`;
