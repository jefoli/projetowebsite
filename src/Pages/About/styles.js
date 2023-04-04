/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-height: 80vh;
    flex-direction: column;
    text-align: center;
    margin: ${theme.spacings.small} auto;
    padding-top: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.small};
  `}

`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fonts.sizes.medium};
    align-items: center;
    line-height: 60px;
  `}
`;

export const AwardText = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 60px;
  gap: 10px;
  `}
`;
