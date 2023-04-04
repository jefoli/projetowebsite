/* eslint-disable react/prop-types */
import * as Styled from './styles';

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
      <span className="focus-input" data-placeholder={placeholder}></span>
    </Styled.WrapInput>
  );
};
