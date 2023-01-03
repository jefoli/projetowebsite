import React from "react";
import './App.css';
import Nav from './Components/Header';
import Body from './Pages/Body';
import Footer from "./Components/Footer";
import Contato from "./Pages/Contato";
import Historia from "./Pages/Historia";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav onClick="/"/>
        <Body onClick="/"/>
        <Contato onClick="/"/>
        <Historia onClick="/"/>
        <Servicos onClick="/"/>
        <Sobre onClick="/sobre"/>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
