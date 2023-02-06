/* eslint-disable no-unused-vars */
import { FaCloudversify, FaReact } from 'react-icons/fa';
import { ComponentCarousel } from '../Carousel';
import { ImageGrid } from '../ImageGrid';
import { RotateImage } from '../RotateImg';
import { SectionContainer } from '../SectionContainer';
import { TextGrid } from '../TextGrid';
import * as Styled from './styles';
import { SliderData } from '../Carousel/SlidersData';

export const TextContent = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>
          <FaReact /> BEM VINDO AO PROJETO REACT <FaReact />
        </h1>
        <br />
        <p>
          Através de pesquisas realizadas em diversas plataformas de ensino foi possível verificar que 99% possuem
          projetos-modelo prontos que induz o aluno a copiar e colar (copy/write), deixando de levar em conta
          assimilaridade do conteúdo.
          <br />
          <br />
          Em sentido oposto, o presente projeto tem como objetivo criar um website com as principais ferramentas da
          biblioteca REACT apresentadas ao longo do curso, sem levar em consideração ao template trabalhado em sala de
          aula.
          <br />
          <br />
          No entanto, vale ressaltar que foram consultados outros websites, modelos e documentações, pois algumas
          ferramentas utilizadas no presente website não foram apresentadas durante o curso - exemplo: Carousel de
          imagens.
        </p>
        <TextGrid />
        <ComponentCarousel slides={SliderData} />
        <TextGrid />
        <RotateImage />
        <Styled.GridContent>
          <TextGrid />
          <TextGrid />
          <ImageGrid />
          <TextGrid />
        </Styled.GridContent>
      </Styled.Container>
    </SectionContainer>
  );
};
