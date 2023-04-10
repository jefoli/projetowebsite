import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, backgroundButton }) => css`
    display: flex;
    font-size: calc(${theme.fonts.sizes.small} - 0.1rem);
    border: none;
    border-radius: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    text-transform: uppercase;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(${theme.spacings.large} - 0.2rem);
    padding: calc(${theme.spacings.medium} - 0.4rem);
    background: ${(props) => props.theme.colors[backgroundButton]};
    cursor: pointer;
    font-weight: 700;

    @media ${theme.media.lteMedium} {
      text-align: center;
    }
  `}
`;
