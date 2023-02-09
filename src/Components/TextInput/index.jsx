import P from 'prop-types';
import * as Styled from './styles';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <Styled.Container
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
    ></Styled.Container>
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
