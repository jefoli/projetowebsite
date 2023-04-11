/* eslint-disable prettier/prettier */
import { PrivacyTermsContainer } from '../../Components/Privacy/PrivacyTermsContainer';
import { PrivacyTermsSection } from '../../Components/Privacy/PrivacyTermsSection';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage = () => {
  return (
    <PrivacyTermsContainer title={'Política de Privacidade'}>
      <PrivacyTermsSection
        title={'Política de Privacidade e Política de Cookies'}
        text={
          'A privacidade dos visitantes é extremamente importante para nós. Esta política de privacidade descreve os tipos de informações pessoais que são coletadas e registradas quando você visita nosso site e como utilizamos essas informações.'
        }
      />

      <PrivacyTermsSection
        title={'Coleta e Uso de Informações'}
        text={
          'Nós coletamos informações pessoais quando você visita nosso site, incluindo seu nome, endereço de e-mail e outras informações de contato que você voluntariamente nos fornece por meio de formulários de contato ou outras interações. As informações pessoais que coletamos são usadas apenas para responder a suas solicitações e fornecer informações sobre nossos serviços. Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para cumprir com uma solicitação específica feita por você ou exigido por lei.'
        }
      />
      <PrivacyTermsSection
        title={'Coleta e Uso de Informações'}
        text={
          'Nós coletamos informações pessoais quando você visita nosso site, incluindo seu nome, endereço de e-mail e outras informações de contato que você voluntariamente nos fornece por meio de formulários de contato ou outras interações. As informações pessoais que coletamos são usadas apenas para responder a suas solicitações e fornecer informações sobre nossos serviços. Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para cumprir com uma solicitação específica feita por você ou exigido por lei.'
        }
      />

      <PrivacyTermsSection
        title={'Coleta e Uso de Informações'}
        text={
          'Nós coletamos informações pessoais quando você visita nosso site, incluindo seu nome, endereço de e-mail e outras informações de contato que você voluntariamente nos fornece por meio de formulários de contato ou outras interações. As informações pessoais que coletamos são usadas apenas para responder a suas solicitações e fornecer informações sobre nossos serviços. Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para cumprir com uma solicitação específica feita por você ou exigido por lei.'
        }
      />

      <PrivacyTermsSection
        title={'Cookies e Tecnologias de Rastreamento'}
        text={
          'Utilizamos cookies e outras tecnologias de rastreamento para melhorar sua experiência em nosso site. Os cookies são arquivos de texto     armazenados no seu dispositivo quando você visita nosso site, e podem ser usados para rastrear informações como sua localização, preferências de idioma, páginas visitadas, tempo gasto no site, entre outros. Essas informações são utilizadas para personalizar o conteúdo do site e melhorar a qualidade de nossos serviços. Você pode optar por desabilitar os cookies em seu navegador, mas isso pode afetar a funcionalidade do site e sua experiência como usuário.'
        }
      />
      <PrivacyTermsSection
        title={'Links Externos'}
        text={
          'Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelas práticas de privacidade desses sites e recomendamos que você leia as políticas de privacidade deles.'
        }
      />

      <PrivacyTermsSection
        title={'Segurança'}
        text={
          'Tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, uso indevido, alteração ou divulgação. No entanto, nenhuma transmissão de dados pela internet é totalmente segura, e não podemos garantir a segurança absoluta das informações transmitidas por meio de nosso site.'
        }
      />

      <PrivacyTermsSection
        title={'Alterações nesta Política de Privacidade'}
        text={
          'Reservamo-nos o direito de atualizar ou modificar esta política de privacidade a qualquer momento, e tais alterações entrarão em vigor imediatamente após serem postadas nesta página.'
        }
      />

      <PrivacyTermsSection
        title={'Alterações em Nossas Políticas'}
        text={
          'Reservamo-nos o direito de atualizar ou modificar esta política de privacidade a qualquer momento, e tais alterações entrarão em vigor imediatamente após serem postadas nesta página.'
        }
      />

      <PrivacyTermsSection
        title={'Contato'}
        text={
          <>
            Se você tiver alguma dúvida ou preocupação sobre nossa política de
            privacidade, entre em contato conosco através do e-mail:
            <Link to={'mailto:projetowebsite@projetowebsite.com'}>
              projetowebsite@projetowebsite.com
            </Link>
            .
          </>
        }
      />
      <PrivacyTermsSection
        title={
          'Ao utilizar nosso site, você concorda com os termos de nossa política de privacidade.'
        }
      />
    </PrivacyTermsContainer>
  );
};
