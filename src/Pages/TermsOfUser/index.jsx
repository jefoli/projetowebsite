import { PrivacyTermsContainer } from '../../Components/Privacy/PrivacyTermsContainer';
import { PrivacyTermsSection } from '../../Components/Privacy/PrivacyTermsSection';

export const TermsOfUser = () => {
  return (
    <PrivacyTermsContainer title={'Termos de Uso'}>
      <PrivacyTermsSection
        text={
          'Bem-vindo ao Projetowebsite! Ao acessar e utilizar o nosso site, você concorda em cumprir os seguintes termos de uso:'
        }
      />
      <PrivacyTermsSection
        title={'Propriedade Intelectual'}
        text={
          'Todo o conteúdo apresentado no Projetowebsite, incluindo textos, imagens, gráficos, logotipos, vídeos, áudios e outros materiais, é de propriedade exclusiva do Projetowebsite ou de seus respectivos proprietários e é protegido por leis de direitos autorais e propriedade intelectual. Você concorda em não copiar, reproduzir, distribuir, transmitir, exibir, vender, licenciar ou explorar de qualquer outra forma o conteúdo do Projetowebsite sem a autorização prévia por escrito do Projetowebsite ou dos proprietários legais.'
        }
      />

      <PrivacyTermsSection
        title={'Uso do Site'}
        text={
          'Você é responsável por utilizar o Projetowebsite de forma adequada e legal. Você concorda em não utilizar o site para qualquer atividade ilegal, ofensiva, prejudicial, difamatória, fraudulenta, ou que viole os direitos de terceiros. Você também concorda em não interferir no funcionamento do site ou prejudicar sua segurança.'
        }
      />

      <PrivacyTermsSection
        title={'Links Externos'}
        text={
          'Você é responsável por utilizar o Projetowebsite de forma adequada e legal. Você concorda em não utilizar o site para qualquer atividade ilegal, ofensiva, prejudicial, difamatória, fraudulenta, ou que viole os direitos de terceiros. Você também concorda em não interferir no funcionamento do site ou prejudicar sua segurança.'
        }
      />

      <PrivacyTermsSection
        title={'Links Externos'}
        text={
          'Você é responsável por utilizar o Projetowebsite de forma adequada e legal. Você concorda em não utilizar o site para qualquer atividade ilegal, ofensiva, prejudicial, difamatória, fraudulenta, ou que viole os direitos de terceiros. Você também concorda em não interferir no funcionamento do site ou prejudicar sua segurança.'
        }
      />
      <PrivacyTermsSection
        title={'Limitação de Responsabilidade'}
        text={`O Projetowebsite é fornecido como está, sem garantias de qualquer tipo, expressas ou implícitas. Não nos responsabilizamos por qualquer dano direto, indireto, incidental, consequencial ou outros tipos de danos relacionados ao uso ou incapacidade de uso do Projetowebsite.`}
      />

      <PrivacyTermsSection
        text={`

        Reservamos o direito de modificar ou atualizar estes termos de uso a qualquer momento, e seu uso contínuo do Projetowebsite após tais modificações constitui sua aceitação dessas modificações. É responsabilidade do usuário revisar periodicamente estes termos de uso para estar ciente de quaisquer alterações.

        `}
      />

      <PrivacyTermsSection
        text={`Além disso, ao utilizar o Projetowebsite, você concorda em cumprir todas as leis e regulamentos aplicáveis e concorda em não utilizar o site de forma inadequada, ilegal, fraudulenta ou prejudicial. Você concorda em não interferir ou prejudicar a funcionalidade do site, os servidores ou redes conectadas ao site, ou violar quaisquer requisitos, procedimentos, políticas ou regulamentos de redes conectadas ao site.`}
      />

      <PrivacyTermsSection
        title={'Limitação de Responsabilidade'}
        text={`O Projetowebsite é fornecido como está, e não garantimos sua disponibilidade, precisão, segurança ou confiabilidade. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais, consequenciais ou especiais decorrentes do uso ou impossibilidade de uso do site.

        `}
      />

      <PrivacyTermsSection
        text={`Estes termos de uso são regidos pelas leis do país/região aplicável, e qualquer litígio decorrente do uso do Projetowebsite será submetido à jurisdição exclusiva dos tribunais competentes.`}
      />
    </PrivacyTermsContainer>
  );
};
