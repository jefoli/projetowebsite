import { Switch,Route } from 'react-router-dom';
import React from "react";
import Body from "../Pages/Body";
import Contato from "../Pages/Contato";
import Historia from "../Pages/Historia";
import Servicos from "../Pages/Servicos";
import NotFound from "../Pages/notFound";
import MyRoute from './MyRoutes';


export default function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={Body} />;
            <Route exact path='/contato' component={Contato} />;
            <Route exact path='/historia' component={Historia} />;
            <Route exact path='/servicos' component={Servicos} />;
            <Route exact path='*' component={NotFound} />;
        </Switch>
    );

};