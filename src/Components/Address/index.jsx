import * as Styled from './styles';
import P, { string } from 'prop-types';

export const Address = ({
  street,
  number,
  neighborhood,
  zipCode,
  city,
  state,
  country,
  icon,
  local,
}) => {
  return (
    <Styled.Container>
      {icon} {local} | Rua {street} | Nº {number} | Bairro {neighborhood} |{' '}
      {city}-{state} | {country} | CEP:{zipCode}
    </Styled.Container>
  );
};

Address.propTypes = {
  street: P.string,
  number: P.string,
  neighborhood: P.string,
  zipCode: P.string,
  city: P.string,
  state: P.string,
  country: P.string,
  icon: P.node,
  local: string,
};
