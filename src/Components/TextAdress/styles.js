import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    background: ${theme.colors.primaryColor};
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    text-align: center;
    color: ${theme.colors.white};
  `}
`;
