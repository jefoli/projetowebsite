import styled from 'styled-components';

export const Form = styled.form`
  padding: 30px;
  display: grid;
  background: rgba(9, 173, 146, 0.74);
  border-radius: 4px;
  font-size: 20px;
  margin-top: 60px;
  label {
    font-size: 20px;
    padding: 5px;
    text-align: left;
    color: #fff;
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
    background: rgb(28, 42, 245);
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
`;
