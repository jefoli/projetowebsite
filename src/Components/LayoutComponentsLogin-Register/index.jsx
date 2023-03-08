import P from 'prop-types';
import * as Styled from './styles';

export const LayoutComponents = (props) => {
  return (
    <Styled.Container>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">{props.children}</form>
        </div>
      </div>
    </Styled.Container>
  );
};

LayoutComponents.propTypes = {
  children: P.node.isRequired,
};
