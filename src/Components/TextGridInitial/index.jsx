/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const TextGridInitial = () => {

  const textToType = 'BEM VINDO AO PROJETO REACT';
  const typingSpeed = 70;

  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(()=> {

    if(charIndex >= textToType.length) {
      return;
    }

    const timer = setTimeout(() => {
      setText(text + textToType[charIndex]);
      setCharIndex(charIndex + 1);
    }, typingSpeed);



    return () => clearTimeout(timer);
  }, [text, charIndex]);



  return (
    <Styled.Container>
      <Styled.MainTitle>{text}</Styled.MainTitle>
      <Styled.ContainerContent>
        <Styled.TextInitial>
          Através de pesquisas realizadas em diversas plataformas de ensino, foi possível verificar que 99% possuem
          projetos-modelo disponíveis que induz o aluno a copiar e colar projetos prontos, sem levar em conta assimilaridade do conteúdo.
        </Styled.TextInitial>
        <Styled.TextInitial>
        Em sentido oposto, o presente projeto tem como objetivo criar um website
        com as principais ferramentas da biblioteca REACT apresentadas ao longo
        do curso, sem levar em consideração ao template trabalhado em sala de
        aula.
      </Styled.TextInitial>

      <Styled.TextInitial>
        Ao longo do desenvolvimento, acabei enfrentando diversos desafios que
        exigiram criatividade e perseverança para serem superados. Aprender a
        utilizar ferramentas como o Carrossel de imagens, por exemplo, exigiu um
        esforço extra, já que essa ferramenta não foi apresentada durante o
        curso.
      </Styled.TextInitial>
      <Styled.TextInitial>
        No entanto, isso nos permitiu ampliar ainda meu conhecimento e oferecer
        uma experiência mais completa.
      </Styled.TextInitial>
      <Styled.TextInitial>
        O Projeto React não apenas permitiu aprender na prática como utilizar a
        biblioteca React em aplicações web modernas, mas também ajudar a
        desenvolver habilidades práticas e a criar um portfólio com projeto
        relevante para o mercado de trabalho.
      </Styled.TextInitial>
      <Styled.TextInitial>
      Sabemos que a biblioteca React é
        amplamente utilizada no mercado e pode ser uma grande vantagem
        competitiva para os profissionais que dominam essa tecnologia.
      </Styled.TextInitial>
      </Styled.ContainerContent>
    </Styled.Container>
  );
};
