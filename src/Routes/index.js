import { Switch } from 'react-router-dom';
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
            <MyRoute exact path='/' component={Body} />;
            <MyRoute exact path='/contato/' component={Contato} />;
            <MyRoute exact path='/historia/' component={Historia} />;
            <MyRoute exact path='/servicos/' component={Servicos} />;
            <MyRoute exact path='*' component={NotFound} />;
        </Switch>
    );

};