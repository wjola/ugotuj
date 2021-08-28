import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import CategoryRecipesView from "./CategoryRecipesView";

const HomePage = () => {
  return (
    <div>
      <CategoryNavigation />
      <CategoryRecipesView />
    </div>
  );
};

export default HomePage;
