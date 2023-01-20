import React from 'react';
import { Body } from '../Pages/Body';
import Header from '../Components/Header';
import Contato from '../Pages/Contato';
import Historia from '../Pages/Historia';
import { Servicos } from '../Pages/Servicos';
import Sobre from '../Pages/Sobre';
import { PostsText } from '../Pages/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function RoutesSistem() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="contato" element={<Contato />} />
        <Route path="historia" element={<Historia />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="post" element={<PostsText />} />
      </Routes>
    </BrowserRouter>
  );
}
