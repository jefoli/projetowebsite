import styled, { css } from 'styled-components';

export const Container = styled.div`

${({ theme }) => css`
    left: 5px;
    font-size: 3rem;
    color: ${theme.colors.white};
    z-index: 1;
    cursor: pointer;
    user-select: none;
    text-align: center;

    @media ${theme.media.lteMedium} {
      text-align: center;
    }
  `}

`;
