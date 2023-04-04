import * as Styled from './styles';
import { Address } from '../../Components/Address';
import { SocialIcons } from '../../Components/SocialIcons';
import { BsBuilding } from 'react-icons/bs';
import { TbBuildingStore, TbBuildingSkyscraper } from 'react-icons/tb';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <SocialIcons />
      <Styled.Container>
        <Address
          icon={<BsBuilding />}
          local={'Fábrica'}
          street={'Test'}
          number={'0000'}
          neighborhood={'Test'}
          zipCode={'000-000'}
          city={'Sorocaba'}
          state={'SP'}
          country={'Brazil'}
        />

        <Address
          icon={<TbBuildingStore />}
          local={'Loja'}
          street={'Test'}
          number={'0000'}
          neighborhood={' Test'}
          zipCode={'000-000'}
          city={'Sorocaba'}
          state={'SP'}
          country={'Brazil'}
        />

        <Address
          icon={<TbBuildingSkyscraper />}
          local={'Sede'}
          street={'Test'}
          number={'0000'}
          neighborhood={' Test'}
          zipCode={'000-000'}
          city={'Sorocaba'}
          state={'SP'}
          country={'Brazil'}
        />
      </Styled.Container>
      <Styled.FooterAuthor>
        Desenvolvido por Jeferson de Oliveira
      </Styled.FooterAuthor>
    </Styled.Wrapper>
  );
};
