import styled from 'styled-components';

export const Div = styled.div`
  padding: 30px;
  display: grid;
  border-radius: 4px;
  font-size: 20px;
  margin-top: 60px;
  background: rgb(237, 245, 245);

  label {
    font-size: 20px;
    padding: 5px;
    text-align: left;
    color: #000;
  }

  input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid;
  }

  button {
    padding: 10px;
    width: 10%;
    border-radius: 4px;
    background-color: rgb(178, 189, 24);
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 15px;

    &:focus {
      background: gray;
      transition: all 50ms;
    }
  }

  .input-box {
    height: 80px;
  }

  h2 {
    margin-top: 100px;
  }
`;

export const Form = styled.div`
  display: grid;
  background: rgb(237, 245, 245);
  grid-template-columns: 590px 590px 589px;
  justify-content: space-between;
  width: 100%;

  .grid-content {
    justify-content: space-around;
    padding: 30px;
    background: rgb(55, 4, 104);
    text-align: center;
    color: #fff;
  }
`;
