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
  color: #FFF;
  font-size: 15px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 12rem 10rem;
  width: calc(100% - 32rem);
  max-width: 1024px;
  border-radius: 1rem;
  transform: translateX(40%);


  .lgpd a {
    color: #080c26;
  }

  .lgpd button {
    background: #080c26;
    border: 0;
    color: #FFF;
    cursor: pointer;
    padding: 10px 30px;
  }

  @media ${theme.media.lteMedium} {
    width: 100%;
    transform: translateX(0%);
  }
  `}
`;
