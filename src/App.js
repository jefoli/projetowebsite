import React from "react";
import Nav from './Components/Header';
import Body from './Pages/Body';
import Footer from "./Components/Footer";
import Contato from "./Pages/Contato";
import Historia from "./Pages/Historia";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";
import { Router } from "react-router-dom";

import history from "./services/history";

function App() {
  return (
        <Router history={history}>
          <Nav />
          <Body />
          <Contato />
          <Historia />
          <Servicos />
          <Sobre />
          <Footer />
        </Router>
  );
}

export default App;
