/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};

    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.mediumGray};
      transition: 600ms ease-in-out;
    }
  `}
`;
