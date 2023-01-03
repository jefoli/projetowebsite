import React from "react";
import Nav from './Components/Header';
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
        <Router history={history}>
          <Nav />
          <Routes />
          <GlobalStyle />
        </Router>
  );
}

export default App;
