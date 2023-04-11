import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 8;
  bottom: 20px;
  padding: 20px;
  background: #967931;
  color: ${theme.colors.white};
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12rem 10rem;
  max-width: 1024px;
  width: 100%;
  border-radius: 10px;
  transform: translateX(40%);

  @media ${theme.media.lteMedium} {
    width: 100%;
    transform: translateX(0%);
  }
  `}
`;

export const Wrapper = styled.div`

`;
