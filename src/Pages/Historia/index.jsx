import { SectionContainer } from '../../Components/SectionContainer';
import { TextGrid } from '../../Components/TextGrid';
import * as Styled from './styles';
export default function Historia() {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>HISTÓRIA</h1>
        <p> A partir de agora você será guiado para conhecer mais sobre nossos produtos e serviços</p>
        <TextGrid />
      </Styled.Container>
    </SectionContainer>
  );
}
