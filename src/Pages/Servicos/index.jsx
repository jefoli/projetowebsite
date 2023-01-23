import { SectionContainer } from '../../Components/SectionContainer';
import { TextGrid } from '../../Components/TextGrid';
import * as Styled from './styles';

export const Servicos = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>SERVIÇOS</h1>
        <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
        <TextGrid />
      </Styled.Container>
    </SectionContainer>
  );
};
