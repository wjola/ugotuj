import React from "react";
import { Route, Redirect } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import AddRecipePage from "../components/AddRecipePage";
import LikedRecipesPage from "../components/LikedRecipesPage";
import SearchPage from "../components/SearchPage";
import Header from "../components/Header";
import CategoryRecipesPage from "../components/CategoryRecipesPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/recipes/soups" />
        </Route>
        <Route path="/recipes" exact={true}>
          <Redirect to="/recipes/soups" />
        </Route>
        <Route
          path="/recipes/:category?/:recipeId?"
          component={CategoryRecipesPage}
        />
        <Route path="/add" component={AddRecipePage} />
        <Route path="/search/:recipeId?" component={SearchPage} />
        <Route path="/liked/:recipeId?" component={LikedRecipesPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
