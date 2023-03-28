import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1310px;
    margin: 60px 0;
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
  `}
`;

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    color: #a07918;
    text-align: center;
    padding: ${theme.fonts.sizes.large};
    font-weight: 400;
  `}
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const TextInitial = styled.h3`
  ${({ theme }) => css`
    font-size: calc(${theme.fonts.sizes.medium} + 0.3rem);
    font-weight: 300;
    padding: 15px;
  `}
`;
