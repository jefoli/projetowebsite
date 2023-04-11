import { DefaultContainer } from '../../DefaultContainer';
import * as Styled from './styles';
import P from 'prop-types';

export const PrivacyTermsContainer = ({ title, children }) => {
  return (
    <DefaultContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </DefaultContainer>
  );
};

PrivacyTermsContainer.propTypes = {
  title: P.string,
  children: P.any,
};
