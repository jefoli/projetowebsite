/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-top: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      width: 100%;
      text-align: center;
    }
  `}

`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.sizes.medium};
    align-items: center;

    @media ${theme.media.lteMedium} {
      width: 100%;
      text-align: center;
    }
  `}
`;

export const AwardText = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 79px;
  gap: 78px;
  margin: 20px 0;

  @media ${theme.media.lteMedium} {
    width: 100%;
    text-align: center;
  }
  `}
`;
