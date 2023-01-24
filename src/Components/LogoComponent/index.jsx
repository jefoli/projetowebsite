import * as Styled from './styles';
import { FaDiceD6 } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LogoComponent = () => {
  return (
    <Styled.Container>
      <Link to="/">
        <FaDiceD6 />
      </Link>
    </Styled.Container>
  );
};
