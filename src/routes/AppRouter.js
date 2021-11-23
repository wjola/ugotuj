import React, { Suspense } from "react";
import { Switch } from "react-router";
import { HashRouter, Route, Redirect } from "react-router-dom";
import PageLoader from "../components/PageLoader";

const CategoryRecipesPage = React.lazy(() =>
  import("../components/CategoryRecipesPage")
);
const Header = React.lazy(() => import("../components/Header"));
const SearchPage = React.lazy(() => import("../components/SearchPage"));
const LikedRecipesPage = React.lazy(() =>
  import("../components/LikedRecipesPage")
);
const AddRecipePage = React.lazy(() => import("../components/AddRecipePage"));

const AppRouter = () => {
  return (
    <HashRouter basename={PUBLIC_URL}>
      <Suspense fallback={<PageLoader />}>
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
          />{" "}
          <Route path="/add" component={AddRecipePage} />
          <Route path="/search/:recipeId?" component={SearchPage} />
          <Route path="/liked/:recipeId?" component={LikedRecipesPage} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};

export default AppRouter;
