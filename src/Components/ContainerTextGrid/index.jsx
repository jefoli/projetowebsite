import * as Styled from './styles';
export const ContainerTextGrid = () => {
  return (
    <Styled.Container>
      <div className="container">
        <h1 className="title"> BEM VINDO AO PROJETO REACT</h1>
        <div className="text-p">
          <p>
            Através de pesquisas realizadas em diversas plataformas de ensino foi possível verificar que 99% possuem
            projetos-modelo prontos que induz o aluno a copiar e colar (copy/write), deixando de levar em conta
            assimilaridade do conteúdo.
          </p>
        </div>
      </div>
    </Styled.Container>
  );
};
