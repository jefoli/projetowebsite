/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 0.4fr);
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    border-bottom: 3px solid #a07918;
    border-radius: 500px 6px;
    gap: 30px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      font-size: ${theme.fonts.sizes.small};
      border-radius: 100px 1px;
    }
  `}
`;

export const TextinInitialTwo = styled.p`
  ${({ theme }) => css`
    display: flex;
    font-size: ${theme.fonts.sizes.medium};
    max-width: 100%;
    line-height: 1.6;
    padding: 0 20px;
    text-align: center;
  `}
`;
