import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import AddRecipePage from '../components/AddRecipePage';
import LikedRecipesPage from '../components/LikedRecipesPage';
import SearchPage from '../components/SearchPage';
import Header from '../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Header />
                <Route path="/" component={HomePage} exact />
                <Route path="/add" component={AddRecipePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/liked" component={LikedRecipesPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;