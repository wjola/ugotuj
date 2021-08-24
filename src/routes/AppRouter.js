import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} exact />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;