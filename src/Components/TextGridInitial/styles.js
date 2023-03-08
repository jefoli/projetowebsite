import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
      display: flex;
      text-align: center;
      max-width: 100%;
      padding: 60px 20px;
      flex-wrap: nowrap;
      line-height: 1.6;
      align-items:center;

    @media ${theme.media.lteMedium} {
        max-width: 100%;
        font-size: ${theme.fonts.sizes.small};
        display: flex;
        flex-direction: column;
        border-radius: 100px 1px;

      .text-p{
        border-bottom: 3px solid #a07918;
        border-radius: 0px 200px;
      }
  `}
`;

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xlarge};
    color: #a07918;
    line-height: 1.2;
    justify-items: center;
    padding: 20px;
  `}
`;

export const TextInitial = styled.p`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fonts.sizes.medium};
    border-bottom: 3px solid #a07918;
    border-radius: 0px 600px;
    padding: 0px 40px;


    @media ${theme.media.lteMedium} {
    .text-p{
      border-bottom: 3px solid #a07918;
      border-radius: 0px 200px;
    }
  `}
`;
