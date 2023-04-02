import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';
import { dataAwards } from './dataAwards';
import { DefaultContainer } from '../../Components/DefaultContainer';
export const Sobre = () => {
  return (
    <SectionContainer>
      <DefaultContainer>
        <Styled.Container>
          <h1>SOBRE NÓS</h1>
          <Styled.AboutText>
            <p className="box1">
              Nós oferecemos uma ampla variedade de serviços para atender às
              suas necessidades de negócios. Se você precisa de uma solução
              completa de desenvolvimento de software ou apenas de suporte
              técnico para manter sua infraestrutura em funcionamento, estamos
              aqui para ajudar. Nossos principais serviços incluem
              desenvolvimento de software personalizado, suporte técnico,
              consultoria em tecnologia, gerenciamento de projetos, design de
              interface do usuário e muito mais.
            </p>
            <div>
              <h3>NOSSAS PREMIAÇÕES</h3>
              {dataAwards.map((data, index) => {
                return <img className="box2" key={index} src={data.award} />;
              })}
            </div>
            <div className="box3">
              <p>
                Temos uma equipe de especialistas em tecnologia altamente
                qualificados e experientes que estão prontos para ajudar a
                resolver seus problemas de negócios. Além disso, oferecemos
                preços competitivos e uma abordagem centrada no cliente para
                garantir que você esteja sempre satisfeito com nosso trabalho.
              </p>
            </div>

            <div className="box4">
              <p>
                Se você está procurando um parceiro de confiança para ajudá-lo a
                alcançar seus objetivos de negócios, entre em contato conosco
                hoje mesmo para saber mais sobre nossos serviços.
              </p>
            </div>
          </Styled.AboutText>
        </Styled.Container>
      </DefaultContainer>
    </SectionContainer>
  );
};
