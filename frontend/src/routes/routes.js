import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../views/Home';
import DetalheProduto from '../views/DetalheProduto';
import SistemaWeb from '../views/SistemaWeb';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detalheProduto" component={DetalheProduto} />
                <Route path="/sistema" component={SistemaWeb} />
            </Switch>
        </BrowserRouter>
    );
}
