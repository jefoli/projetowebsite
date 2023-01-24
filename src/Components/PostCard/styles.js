/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
      background: ${theme.colors.white};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 100ms ease-in-out;
    }

    &:hover {
      transform: scale(1.05);
    }

    .post img {
      max-width: 100%;
    }
  `}
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
      padding: 30px;
    }
  `}
`;
