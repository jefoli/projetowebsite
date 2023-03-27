import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
      display: flex;
      flex-direction: column;
      text-align: center;
      max-width: 100%;
      flex-wrap: nowrap;
      line-height: 1.6;
      align-items: center;
      padding: 10px 0;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
      display: flex;
      flex-direction: column;
      border-radius: 100px 1px;
  `}
`;

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    color: #cf9900;
    line-height: 1.2;
    justify-items: center;
    padding: ${theme.fonts.sizes.medium};
    font-weight: 400;
    `}
`;

export const ContainerContent = styled.div`
  border-bottom: 3px solid #a07918;
  border-radius: 0px 600px;
  padding: 20px 0;
`;

export const TextInitial = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    font-weight: 500;
    padding: 20px 0;
    line-height: 50px;

  `}
`;
