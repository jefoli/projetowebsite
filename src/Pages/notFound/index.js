import React from "react";
import { ErrorContainer } from './styled';
import { BrowserRouter } from "react-router-dom"; 

export default function NotFound(){
    return(
        <BrowserRouter>
            <ErrorContainer>
                ERROR 404 - PÁGINA NÃO ENCONTRADA
            </ ErrorContainer>
        </BrowserRouter>
    );
}
