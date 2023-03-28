import React from 'react';
import { Home } from '../Pages/Home';
import { NavBar } from '../Components/Navbar';
import { Contato } from '../Pages/Contact';
import { Servicos } from '../Pages/Services';
import { Sobre } from '../Pages/About';
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
        <Route path="about" element={<Sobre />} />
        <Route path="contact" element={<Contato />} />
        <Route path="services" element={<Servicos />} />
        <Route path="posts" element={<PostsText />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
