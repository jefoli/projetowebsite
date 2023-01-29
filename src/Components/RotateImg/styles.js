import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacings.medium};
    justify-content: center;

    > .img {
      animation: rotate 10s linear infinite;
      color: ${theme.colors.primaryColor};
      font-size: 350px;
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
  `}
`;
