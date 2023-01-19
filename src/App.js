import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { Footer } from './Components/Footer';
import RoutesSistem from './routes/routes';

function App() {
  return (
    <>
      <RoutesSistem />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default App;
