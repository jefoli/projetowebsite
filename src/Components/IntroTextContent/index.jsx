import * as Styled from './styles';
import { TypewriterEffect } from '../TypewriterEffect';
import { BoxTextContent } from '../BoxTextContent';
import { DefaultContainer } from '../DefaultContainer';
import { VideoPlayer } from '../VideoPlayer';
import { Title } from '../Title';

export const IntroTextContent = () => {
  return (
    <>
      <VideoPlayer />
      <Title>
        <TypewriterEffect
          title={'bem-vindo ao projeto react'}
          typingSpeed={70}
        />
      </Title>
      <DefaultContainer>
        <Styled.ContainerContent>
          <BoxTextContent>
            Através de pesquisas realizadas em diversas plataformas de ensino,
            foi possível verificar que 99% possuem projetos-modelo disponíveis
            que induz o aluno a copiar e colar projetos prontos, sem levar em
            conta assimilaridade do conteúdo.
          </BoxTextContent>

          <BoxTextContent>
            Em sentido oposto, o presente projeto tem como objetivo criar um
            website com as principais ferramentas da biblioteca REACT
            apresentadas ao longo do curso, sem levar em consideração ao
            template trabalhado em sala de aula.
          </BoxTextContent>

          <BoxTextContent>
            Ao longo do desenvolvimento, acabei enfrentando diversos desafios
            que exigiram criatividade e perseverança para serem superados.
            Aprender a utilizar ferramentas como o Carrossel de imagens, por
            exemplo, exigiu um esforço extra, já que essa ferramenta não foi
            apresentada durante o curso.
          </BoxTextContent>

          <BoxTextContent>
            No entanto, isso nos permitiu ampliar ainda meu conhecimento e
            oferecer uma experiência mais completa. O Projeto React não apenas
            permitiu aprender na prática como utilizar a biblioteca React em
            aplicações web modernas, mas também ajudar a desenvolver habilidades
            práticas e a criar um portfólio com projeto relevante para o mercado
            de trabalho.
          </BoxTextContent>

          <BoxTextContent>
            Sabemos que a biblioteca React é amplamente utilizada no mercado e
            pode ser uma grande vantagem competitiva para os profissionais que
            dominam essa tecnologia.
          </BoxTextContent>
        </Styled.ContainerContent>
      </DefaultContainer>
    </>
  );
};
