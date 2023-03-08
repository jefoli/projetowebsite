import styled from 'styled-components';
export const Container = styled.div`
  > a {
    text-decoration: none;
  }
`;

export const BtnLogin = styled.button`
  font-size: 15px;
  border: none;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 20px;
  background: -webkit-linear-gradient(to left, #003c58, #111);
  background: -o-linear-gradient(to left, #003c58, #111);
  background: -moz-linear-gradient(to left, #003c58, #111);
  background: linear-gradient(to left, #003c58, #111);
  cursor: pointer;
`;
