import styled from 'styled-components';

export const Navbar = styled.div`
  display: block;
  width: 100%;
  height: 20px;
  padding: 30px;
  background: #fff;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    font-size: 20px;
    color: #000;
    text-decoration: none;
    padding: 0px 0px 0px 40px;
  }

  a:hover {
    color: rgb(178, 189, 24);
    transition: 150ms ease-in-out;
  }
`;
