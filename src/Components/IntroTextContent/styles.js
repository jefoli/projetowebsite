import styled, { css } from 'styled-components';

export const ContainerContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }

  `}
`;
