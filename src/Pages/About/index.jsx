import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';

export const Sobre = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>SOBRE NÓS</h1>
        <Styled.AboutText>
          <p className="box1">
            Nós oferecemos uma ampla variedade de serviços para atender às suas
            necessidades de negócios. Se você precisa de uma solução completa de
            desenvolvimento de software ou apenas de suporte técnico para manter
            sua infraestrutura em funcionamento, estamos aqui para ajudar.
            Nossos principais serviços incluem desenvolvimento de software
            personalizado, suporte técnico, consultoria em tecnologia,
            gerenciamento de projetos, design de interface do usuário e muito
            mais.
          </p>
          <div className="box2">
            <img
              src="http://source.unsplash.com/random/360x360?r=1"
              alt="random image from unsplash"
            />
            <img
              src="http://source.unsplash.com/random/360x360?r=1"
              alt="random image from unsplash"
            />
            <img
              src="http://source.unsplash.com/random/360x360?r=1"
              alt="random image from unsplash"
            />
            <img
              src="http://source.unsplash.com/random/360x360?r=1"
              alt="random image from unsplash"
            />
          </div>

          <p className="box3">
            Temos uma equipe de especialistas em tecnologia altamente
            qualificados e experientes que estão prontos para ajudar a resolver
            seus problemas de negócios. Além disso, oferecemos preços
            competitivos e uma abordagem centrada no cliente para garantir que
            você esteja sempre satisfeito com nosso trabalho.
          </p>
          <p className="box4">
            Se você está procurando um parceiro de confiança para ajudá-lo a
            alcançar seus objetivos de negócios, entre em contato conosco hoje
            mesmo para saber mais sobre nossos serviços.
            <img
              src="https://www.remessaonline.com.br/blog/wp-content/uploads/2022/07/video-react-no-YouTube-1024x683.jpg.webp"
              alt=""
            />
          </p>
        </Styled.AboutText>
      </Styled.Container>
    </SectionContainer>
  );
};
