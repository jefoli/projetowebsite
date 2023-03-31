import P from 'prop-types';
import { InputBox } from '../InputBox';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <InputBox
      value={searchValue}
      onChange={handleChange}
      type="search"
      name="input-text"
      placeholder="Type your search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
