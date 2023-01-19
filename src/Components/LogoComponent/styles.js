import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: 50px;
    color ${theme.colors.primaryColor}
  `}
`;
