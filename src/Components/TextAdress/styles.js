import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: ${theme.fonts.sizes.small};
    background: ${theme.colors.primaryColor};
    padding: ${theme.spacings.medium};
    text-align: center;
    color: ${theme.colors.white};

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
  `}
`;
