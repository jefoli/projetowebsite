import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;
    bottom: ${theme.spacings.small};
    padding: ${theme.spacings.medium};
    background: ${theme.colors.boxColor};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
    box-shadow: rgba(0, 0, 0, 0.3) 0px ${theme.fonts.sizes.xsmall} ${theme.fonts.sizes.small};
    max-width: 1024px;
    width: 100%;
    border-radius: ${theme.fonts.sizes.small};
    transform: translateX(-50%);
    left: 50%;

    @media ${theme.media.lteMedium} {
      width: 100%;
    }
  `}
`;

export const Wrapper = styled.div`

`;
