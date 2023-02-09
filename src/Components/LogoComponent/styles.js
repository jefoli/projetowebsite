/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.primaryColor};

    a:hover {
      color: ${theme.colors.mediumGray};
      transition: 150ms ease-in-out;
      background: none;
    }

    .logo {
      width: 20px;
    }
  `}
`;
