import React from "react";
import Header from './Components/Header';
import { Router } from "react-router-dom";
import history from "./services/history";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
        </Router>
  );
}

export default App;
