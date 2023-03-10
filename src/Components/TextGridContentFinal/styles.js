import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    max-width: 100%;
    align-items: center;
    gap: 50px;
    margin-top: 10px;

    > img {
      box-shadow: 0px 0px 2px 2px #c3c3c3;
      align-items: center;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-wrap: wrap;
      max-width: 100%;
      align-items: center;

      > img {
        max-width: 340px;
        box-shadow: 0px 0px 0px 5px #c3c3c3;
      }
    }
  `}
`;
