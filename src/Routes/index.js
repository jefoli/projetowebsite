import { Switch } from 'react-router-dom';
import React from 'react';
import Body from '../Pages/Body';
import Contato from '../Pages/Contato';
import Historia from '../Pages/Historia';
import Servicos from '../Pages/Servicos';
import NotFound from '../Pages/notFound';
import MyRoute from './MyRoutes';
import Sobre from '../Pages/Sobre';
import Post from '../Pages/Posts';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/home" component={Body} />;
      <MyRoute exact path="/contato/" component={Contato} />;
      <MyRoute exact path="/historia/" component={Historia} />;
      <MyRoute exact path="/servicos/" component={Servicos} />;
      <MyRoute exact path="/sobre/" component={Sobre} />;
      <MyRoute exact path="/post/" component={Post} />;
      <MyRoute exact path="*" component={NotFound} />;
    </Switch>
  );
}
