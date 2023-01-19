import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
export const TextGrid = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          height="150"
          alt="./logo.png"
        />
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado
        desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um
        livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração
        eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou
        decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de
        editoração eletrônica como Aldus PageMaker.
      </Styled.Container>
    </SectionContainer>
  );
};
