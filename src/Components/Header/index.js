import React from "react";
import { Navbar } from './styled';
import { BrowserRouter } from "react-router-dom"; 
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <BrowserRouter >
            <Navbar>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/servicos">Nosos Serviços</Link>
            <Link to="/historia">História</Link>
            <Link to="/contato">Contato</Link>
            </Navbar>
        </BrowserRouter>
    );
}
