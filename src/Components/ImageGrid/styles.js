import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  background: white;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacings.large};
    justify-content: center;
    width: 100%;
    padding: ${theme.spacings.xlarge};
    border-radius: 300px 0px 0px;
    border-left: 3px solid #a07918;
    background: #080c26;
    border-top: 3px solid #a07918;

    img {
      max-width: 200px;
      max-height: auto;
      transition: all 200ms ease-in-out;
      overflow: hidden;
      width: 100%;
      border-radius: 500px 500px;
      box-shadow: 0 0px 0px 2px #a07918;
    }

    img:hover {
      transform: scale(1.1);
    }

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;

      > img {
        max-width: auto;
        max-height: auto;
        transition: all 200ms ease-in-out;
        overflow: hidden;
        width: 100%;
      }

      img:hover {
        transform: scale(1.1);
      }
    }
  `}
`;
