import React from 'react';
import Header from './Components/Header';
import { Body } from './Pages/Body';
import GlobalStyle from './Styles/GlobalStyles';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Body />
      <GlobalStyle />
      <Footer />
    </>
  );
}

export default App;
