import React from 'react';
import { Home } from '../Pages/Home';
import NavBar from '../Components/Navbar';
import Contato from '../Pages/Contato';
import Historia from '../Pages/Historia';
import { Servicos } from '../Pages/Servicos';
import Sobre from '../Pages/Sobre';
import { PostsText } from '../Pages/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '../Pages/NotFound';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';

export default function RoutesSistem() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="historia" element={<Historia />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="post" element={<PostsText />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
