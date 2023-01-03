import React from "react";
import { FooterStyle } from './styled';
import { BrowserRouter } from "react-router-dom"; 

export default function Footer(){
    return(
        <BrowserRouter>
            <FooterStyle>
                Desenvolvido por Jeferson de Oliveira
            </ FooterStyle>
        </BrowserRouter>
    );
}
