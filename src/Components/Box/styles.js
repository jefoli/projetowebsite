import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 100%;
    background: ${theme.colors.boxColor};
    border-radius: ${theme.spacings.xxsmall};
    box-shadow: white ${theme.fonts.sizes.xxsmall} ${theme.fonts.sizes.xxsmall} 0px calc(${theme.fonts.sizes.xxsmall} - 0.2rem);

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;
    }
  `}
`;

export const TitleBox = styled.h3`
  font-weight: 600;
`;

export const LinkStyled = styled.span`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xxsmall};
    font-size: calc(${theme.fonts.sizes.medium} - 0.4rem);
    color: ${theme.colors.linkColor};
    text-decoration: underline;
    align-items: center;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const StyleIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: white;
    text-decoration: none;
    font-size: auto;
    padding: ${theme.spacings.small};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 50%;
    font-size: ${theme.fonts.sizes.large};
    color: #a07918;
    padding: ${theme.spacings.small};
    text-transform: uppercase;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const BoxTextContent = styled.div`
  ${({ theme }) => css`
    max-width: 75%;
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.small};
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const BoxStyled = styled.div`
  ${({ theme }) => css`
    font-size: calc(${theme.fonts.sizes.medium} - 0.6rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacings.xsmall};
    line-height: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;
