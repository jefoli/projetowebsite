import { SectionContainer } from '../../Components/SectionContainer';
import { TextGrid } from '../../Components/TextGrid';
import * as Styled from './styles';

export const Servicos = () => {
  return (
    <SectionContainer>
      <Styled.Container>
        <h1>Nossos Serviços</h1>
        <p>Oferecemos uma ampla variedade de serviços para atender às suas necessidades de negócios. Se você precisa de uma solução completa de desenvolvimento de software ou apenas de suporte técnico para manter sua infraestrutura em funcionamento, estamos aqui para ajudar.</p>
        <h2>Alguns dos serviços que oferecemos incluem:</h2>
        <h1>Desenvolvimento de Software</h1>
        <p>Nossa equipe de desenvolvimento de software possui a experiência e o conhecimento necessários para criar soluções personalizadas para atender às necessidades do seu negócio. Utilizamos as mais recentes tecnologias e metodologias para garantir que sua solução esteja sempre atualizada e em conformidade com as melhores práticas da indústria.</p>
        <h1>Suporte Técnico</h1>
        <p>Oferecemos suporte técnico para ajudar a manter sua infraestrutura em funcionamento. Desde a configuração inicial até o suporte contínuo, nossa equipe de suporte técnico está sempre pronta para ajudar.</p>
        <h1>Consultoria em TI</h1>
        <p>Se você precisa de ajuda para tomar decisões estratégicas em relação à tecnologia da informação, podemos ajudar. Oferecemos serviços de consultoria em TI para ajudá-lo a definir suas prioridades e tomar decisões informadas que impulsionem seu negócio.</p>
      </Styled.Container>
    </SectionContainer>
  );
};
