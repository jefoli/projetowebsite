import * as Styled from './styles';

import { BsBuilding } from 'react-icons/bs';
import { TbBuildingStore } from 'react-icons/tb';

export const TextAdress = () => {
  return (
    <Styled.Container>
      <p>
        <BsBuilding />
        Sorocaba/SP: Rua Teste, 000, bairro Teste, CEP 00000-000
      </p>
      <p>
        <TbBuildingStore />
        São Paulo/SP: Rua Teste, 000, bairro Teste, CEP 00000-000
      </p>
      <p>
        <BsBuilding />
        Campinas/SP: Rua Teste, 000, bairro Teste, CEP 00000-000
      </p>
    </Styled.Container>
  );
};
