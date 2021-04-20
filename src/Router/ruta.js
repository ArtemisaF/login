import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from '../App';
import Admin from '../home/admin';
import User from '../home/user';
import Madmin from '../home/megaAdmin'

function ruta() {
    
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/AdminH" component={Admin}></Route>
            <Route exact path="/User" component={User}></Route>
            <Route exact path="/Admin" component={Madmin}></Route>
        </BrowserRouter>
    );
    
}
export default ruta;