import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
      display: flex;
      text-align: center;
      max-width: 100%;
      flex-wrap: nowrap;
      line-height: 1.6;
      align-items: center;
      padding: 10px 0;
      margin: calc(${theme.spacings.xhuge} + 0.5rem) 0;


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
    font-size: ${theme.fonts.sizes.xlarge};
    color: #705000;
    line-height: 1.2;
    justify-items: center;
    padding: ${theme.fonts.sizes.medium};
  `}
`;

export const ContainerContent = styled.div`
  border-bottom: 3px solid #a07918;
  border-radius: 0px 600px;
`;

export const TextInitial = styled.p`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.fonts.sizes.medium};
  `}
`;
