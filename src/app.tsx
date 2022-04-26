import React from "react";
import Cep from "./pages/Cep";
import Calculadora from "./pages/Calculadora";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

export const App:React.FC =() =>{
    return(
        
        <Router>
            <div>
            <Switch>
                <Route path="/" exact>
                    <Cep/>
                </Route>
                <Route path="/calculadora" exact>
                    <Calculadora/>
                </Route>
            </Switch>
            </div>
        </Router>
    
    )
}