import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    align-items: center;
    border-radius: 4px;
    background: ${theme.colors.backgroundGradientGray};

    > svg {
      width: 2rem;
      height: 2rem;
    }

    @media ${theme.media.lteMedium} {
      justify-content: center;
      display: flex;
    }
  `}
`;
