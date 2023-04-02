import { DefaultContainer } from '../../Components/DefaultContainer';
import { Form } from '../../Components/Form';
import { SectionContainer } from '../../Components/SectionContainer';
import * as Styled from './styles';

export const Contato = () => {
  return (
    <SectionContainer>
      <DefaultContainer>
        <Styled.Container>
          <h1>CONTATO</h1>
          <h2>
            Seu contato é muito importante para aprimorarmos nossos serviços!
          </h2>
          <Form />
        </Styled.Container>
      </DefaultContainer>
    </SectionContainer>
  );
};
