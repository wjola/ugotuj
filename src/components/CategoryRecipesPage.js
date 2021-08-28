import React from "react";
import CategoryRecipesView from "./CategoryRecipesView";
import CategoryNavigation from "./CategoryNavigation";

const CategoryRecipesPage = (props) => {
  return (
    <main>
      <CategoryNavigation />
      <CategoryRecipesView categoryName={props.match.params.category} />
    </main>
  );
};

export default CategoryRecipesPage;
