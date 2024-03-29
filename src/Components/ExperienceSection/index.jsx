import { BoxTextContent } from '../BoxTextContent';
import { Title } from '../Title';
import * as Styled from './styles';
export const ExperienceSection = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Content>
          <Title>experiência e sofisticação são nossas prioridades </Title>

          <BoxTextContent>
            Na busca por oferecer sempre o melhor para nossos clientes, a
            experiência e sofisticação são nossas prioridades. Desde o
            atendimento até a entrega do produto final, cada etapa é
            cuidadosamente planejada para garantir que o cliente tenha uma
            experiência única e especial.
          </BoxTextContent>

          <BoxTextContent>
            Nossos profissionais são altamente capacitados e possuem uma vasta
            experiência em suas áreas de atuação, o que nos permite oferecer
            soluções personalizadas e adequadas às necessidades de cada cliente.
            Além disso, investimos constantemente em tecnologia e inovação,
            buscando sempre estar à frente das tendências e oferecer produtos e
            serviços sofisticados e de alta qualidade.
          </BoxTextContent>
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
