/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import * as Styled from './styles';


export const TextGridInitial = () => {

  const textToType = 'BEM VINDO AO PROJETO REACT';
  const typingSpeed = 70;

  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(()=>{

    if(charIndex >= textToType.length){
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
          projetos-modelo prontos que induz o aluno a copiar e colar, sem levar em conta assimilaridade do conteúdo.
        </Styled.TextInitial>
      </Styled.ContainerContent>
    </Styled.Container>
  );
};
