import { useState } from 'react';
import { GenericButton } from '../Buttons/GenericButton';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const CookieBanner = () => {
  const [state, setState] = useState(true);

  const handleButtonClick = () => {
    setState(false);
  };

  return (
    <>
      {state && (
        <Styled.Container>
          <div>
            <h2>Política de Cookies</h2>
            Usamos cookies para garantir que você obtenha a melhor experoência
            em nosso site.
            <br />
            Consulte nossa
            <Link to="/privacy-policy"> Política de Privacidade.</Link>
          </div>
          <div>
            <GenericButton
              text="OK"
              link={'#'}
              backgroundButton={'backgroundGradientLeft'}
              onClick={handleButtonClick}
            />
          </div>
        </Styled.Container>
      )}
    </>
  );
};
