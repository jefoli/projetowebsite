import styled, { css } from 'styled-components';

export const Container = styled.div`

${({ theme }) => css`
    font-size: 3rem;
    color: ${theme.colors.white};
    z-index: 10;
    cursor: pointer;
    user-select: none;
    text-align: center;

    @media ${theme.media.lteMedium} {
      text-align: center;
    }
  `}

`;
