import { InputBox } from '../InputBox';
import * as Styled from './styles';
import P from 'prop-types';

export const ContactFormInput = ({ labelText, type, name, placeholder }) => {
  return (
    <>
      <Styled.LabelText>{labelText}</Styled.LabelText>
      <InputBox type={type} name={name} placeholder={placeholder} />
    </>
  );
};

ContactFormInput.propTypes = {
  labelText: P.string.isRequired,
  type: P.string.isRequired,
  name: P.string.isRequired,
  placeholder: P.string.isRequired,
};
