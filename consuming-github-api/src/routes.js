import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Repository from './pages/Repository';
import DetailsRepo from './pages/DetailsRepo';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repository" component={Repository} />
                <Route path="/details/:repository" component={DetailsRepo} />
            </Switch>
        </BrowserRouter>
    );
}