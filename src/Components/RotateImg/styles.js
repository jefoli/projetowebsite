import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 100%;
    padding: ${theme.spacings.medium};
    justify-content: space-around;

    .img {
      animation: rotate 10s linear infinite;
      color: ${theme.colors.primaryColor};
      font-size: 300px;
      text-align: center;
    }

    @media {
      .App-logo {
        animation: App-logo-spin 10s linear infinite;
      }
      .reverse {
        animation: App-logo-spin-reverse 10s linear infinite;
      }
    }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes App-logo-spin-reverse {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0deg);
      }
    }

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      .img {
      font-size: 150px;
    }
  `}
`;
