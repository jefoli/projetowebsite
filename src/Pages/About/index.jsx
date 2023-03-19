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
          <div>
            <h3>NOSSAS PREMIAÇÕES</h3>

            <div className="box2">
              <img
                src="http://source.unsplash.com/random/360x360?r=1"
                alt="random image from unsplash"
              />
              <img
                src="http://source.unsplash.com/random/360x360?r=2"
                alt="random image from unsplash"
              />
              <img
                src="http://source.unsplash.com/random/360x360?r=3"
                alt="random image from unsplash"
              />
              <img
                src="http://source.unsplash.com/random/360x360?r=4"
                alt="random image from unsplash"
              />
              <img
                src="http://source.unsplash.com/random/360x360?r=5"
                alt="random image from unsplash"
              />
            </div>
          </div>
          <div className="box3">
            <p>
              Temos uma equipe de especialistas em tecnologia altamente
              qualificados e experientes que estão prontos para ajudar a
              resolver seus problemas de negócios. Além disso, oferecemos preços
              competitivos e uma abordagem centrada no cliente para garantir que
              você esteja sempre satisfeito com nosso trabalho.
            </p>
          </div>

          <div className="box4">
            <p>
              Se você está procurando um parceiro de confiança para ajudá-lo a
              alcançar seus objetivos de negócios, entre em contato conosco hoje
              mesmo para saber mais sobre nossos serviços.
            </p>
          </div>
        </Styled.AboutText>
      </Styled.Container>
    </SectionContainer>
  );
};
