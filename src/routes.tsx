import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import Home from './pages/Home/home';
import CollectPoint from './pages/CollectPoint/collect-point'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Home } path="/" exact/>
            <Route component={ CollectPoint } path="/create-collect-point"/>
        </BrowserRouter>
    )
}

export default Routes;