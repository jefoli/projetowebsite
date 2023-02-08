/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: ${theme.spacings.medium};
    font-size: ${theme.fonts.sizes.medium};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
