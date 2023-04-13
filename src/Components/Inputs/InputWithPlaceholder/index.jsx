import * as Styled from './styles';
import P from 'prop-types';

export const InputWithPlaceholder = ({
  value,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <Styled.WrapInput>
      <Styled.FocusInput
        className={value !== '' ? 'has-val input' : 'input'}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Styled.FocusSpan data-placeholder={placeholder} />
    </Styled.WrapInput>
  );
};

InputWithPlaceholder.propTypes = {
  value: P.string,
  type: P.string,
  onChange: P.func,
  placeholder: P.string,
};
