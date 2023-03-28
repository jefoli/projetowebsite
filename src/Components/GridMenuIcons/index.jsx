/* eslint-disable no-unused-vars */
import * as Styled from './styles';
import { BsFilePost, BsArrowRightShort, BsInfoSquare } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdMiscellaneousServices } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { Box } from '../Box';
export const GridMenuIcons = () => {
  const text = 'Saiba Mais';

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <h1>Explore o site com facilidade usando nossos links rápidos.</h1>
      </Styled.Wrapper>
      <Styled.BoxTextContent>
        <h3>
          Com apenas um clique, você pode acessar as informações mais
          importantes sobre a nossa empresa, incluindo nossa história, serviços
          oferecidos, opções de contato e as últimas novidades em nosso blog.
        </h3>
      </Styled.BoxTextContent>
      <div className="section-wrapper">
        <div className="styleGrid">
          <Box
            menuText="Sobre nós"
            ParagraphText="conheça um pouco sobre nossa trajetória."
          />
          <Box
            menuText="Nossos serviços"
            ParagraphText="Conheça na integra sobre todos nossos serviços."
          />
          <Box
            menuText="Entre em contato"
            ParagraphText="Fale conosco, pois queremos te ouvir."
          />
          <Box
            menuText="Nossos Posts"
            ParagraphText="Leia sobre as principais novidades e lançamentos."
          />
        </div>
      </div>
    </Styled.Container>
  );
};
