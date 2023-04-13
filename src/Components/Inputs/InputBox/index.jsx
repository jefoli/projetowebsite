import * as Styled from './styles';
import P from 'prop-types';

export const InputBox = ({ type, name, placeholder, value, onChange }) => {
  return (
    <Styled.InputArea
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      className="focus-input "
    />
  );
};

InputBox.propTypes = {
  type: P.oneOf(['text', 'password', 'email', 'tel', 'search']),
  name: P.string.isRequired,
  placeholder: P.string,
  value: P.string,
  onChange: P.func,
};
