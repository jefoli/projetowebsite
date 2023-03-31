import styled, { css } from 'styled-components';

export const Container = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-size: ${theme.fonts.sizes.medium};
    padding: 0 ${theme.spacings.small};
    width: auto;
    font-family: Arial, Helvetica, sans-serif;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `};
`;
