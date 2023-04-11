import * as Styled from './styles';
import P from 'prop-types';

export const PrivacyTermsSection = ({ title, text }) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{title}</Styled.Title>
      <p>{text}</p>
    </Styled.Wrapper>
  );
};

PrivacyTermsSection.propTypes = {
  title: P.string,
  text: P.string,
};
