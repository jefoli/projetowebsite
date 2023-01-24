import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
export const TextGrid = () => {
  return (
    <SectionContainer>
      <Styled.ContainerFlex>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
          utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para
          fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a
          Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado
          a softwares de editoração eletrônica como Aldus PageMaker.
        </p>
      </Styled.ContainerFlex>
    </SectionContainer>
  );
};
