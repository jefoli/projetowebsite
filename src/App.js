import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { Footer } from './Components/Footer';
import RoutesSistem from './routes/routes';
import { GoTop } from './Components/GoTop';

function App() {
  return (
    <>
      <RoutesSistem />
      <GlobalStyles />
      <Footer />
      <GoTop />
    </>
  );
}

export default App;
