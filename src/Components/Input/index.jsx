import * as Styled from './styles';
import P from 'prop-types';

export const InputBox = ({ type, name, placeholder }) => {
  return (
    <>
      <Styled.InputArea type={type} name={name} placeholder={placeholder} />
    </>
  );
};

InputBox.propTypes = {
  type: P.oneOf(['text', 'password', 'email', 'tel']),
  name: P.string.isRequired,
  placeholder: P.string,
};
