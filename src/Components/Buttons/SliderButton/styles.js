import styled, { css } from 'styled-components';

export const Container = styled.div`

${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.white};
    z-index: 5;
    cursor: pointer;
    user-select: none;
    text-align: center;

    @media ${theme.media.lteMedium} {
      text-align: center;
      width: 80%;
    }
  `}

`;
