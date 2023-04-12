import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      padding: ${theme.spacings.xsmall};
      text-align: center;
      }
    }
  `}
`;
