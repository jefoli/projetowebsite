import React from "react";
import { Route } from "react-router-dom";

export default function MyRoute({component:Component, isClosed=false, ...rest}){

    return(
        < Route {...rest} component={Component}/>
    ) 
}