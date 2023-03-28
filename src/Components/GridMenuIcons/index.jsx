import * as Styled from './styles';
import { BsFilePost } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdMiscellaneousServices } from 'react-icons/md';
import { Box } from '../Box';

export const GridMenuIcons = () => {
  return (
    <Styled.Container>
      <Styled.Title>
        Explore o site com facilidade usando nossos links rápidos
      </Styled.Title>
      <Styled.TextContent>
        Com apenas um clique, você pode acessar as informações mais importantes
        sobre a nossa empresa, incluindo nossa história, serviços oferecidos,
        opções de contato e as últimas novidades em nosso blog.
      </Styled.TextContent>
      <Styled.SectionWrapper>
        <Styled.StyleGrid>
          <Box
            menuText="Sobre nós"
            ParagraphText="conheça um pouco sobre nossa trajetória."
            icons={<BsFilePost />}
            menuLink={'/about'}
          />
          <Box
            menuText="Nossos serviços"
            ParagraphText="Conheça na integra sobre todos nossos serviços."
            icons={<MdMiscellaneousServices />}
            menuLink={'/services'}
          />
          <Box
            menuText="Entre em contato"
            ParagraphText="Fale conosco, pois queremos te ouvir."
            icons={<RiContactsLine />}
            menuLink={'/contact'}
          />
          <Box
            menuText="Nossos Posts"
            ParagraphText="Leia sobre as principais novidades e lançamentos."
            icons={<BsFilePost />}
            menuLink={'/posts'}
          />
        </Styled.StyleGrid>
      </Styled.SectionWrapper>
    </Styled.Container>
  );
};
