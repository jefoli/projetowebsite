/* eslint-disable no-unused-vars */
import { FaReact } from 'react-icons/fa';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const TextInitialHome = () => {
  return (
    <SectionContainer>
      <Styled.Container className="input">
        <div>
          <h1>
            <FaReact /> BEM VINDO AO PROJETO REACT <FaReact />
          </h1>
          <div className="container-p">
            <p>
              Através de pesquisas realizadas em diversas plataformas de ensino foi possível verificar que 99% possuem
              projetos-modelo prontos que induz o aluno a copiar e colar (copy/write), deixando de levar em conta
              assimilaridade do conteúdo.
            </p>
          </div>

          <div className="container-p">
            <p>
              Em sentido oposto, o presente projeto tem como objetivo criar um website com as principais ferramentas da
              biblioteca REACT apresentadas ao longo do curso, sem levar em consideração ao template trabalhado em sala
              de aula.
            </p>
          </div>
          <div className="text-p">
            <p>
              No entanto, vale ressaltar que foram consultados outros websites, modelos e documentações, pois algumas
              ferramentas utilizadas no presente website não foram apresentadas durante o curso - exemplo: Carousel de
              imagens.
            </p>
          </div>
        </div>
      </Styled.Container>
    </SectionContainer>
  );
};
