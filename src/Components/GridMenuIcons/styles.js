import styled, { css } from 'styled-components';

export const Container = styled.section`
${({ theme }) => css`
    display: flex;
    border-bottom: 2px solid #a07918;
    width: 100%;
    min-height: 80vh;
    background: #080c26;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    justify-content: space-evenly;
    padding: 15px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }
  `}
`;

export const SectionWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    font-size: calc(${theme.fonts.sizes.medium} - 0.2rem);
    padding: 15px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const StyleGrid = styled.div`
${({ theme }) => css`
  display: grid;
  max-width: 100%;
  max-height: 100%;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  @media ${theme.media.lteMedium} {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
  }
`}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    max-width: 50%;
    font-size: ${theme.fonts.sizes.xxlarge};
    color: #a07918;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 400;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const TextContent = styled.h2`
  ${({ theme }) => css`
    max-width: 75%;
    font-size: ${theme.fonts.sizes.large};
    padding: 15px;
    font-weight: 300;
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;
