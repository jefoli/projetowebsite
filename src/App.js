import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { Footer } from './Components/Footer';
import RoutesSistem from './routes/routes';
import { TextAdress } from './Components/TextAdress';

function App() {
  return (
    <>
      <RoutesSistem />
      <GlobalStyles />
      <TextAdress />

      <Footer />
    </>
  );
}

export default App;
