import React from "react";
import CategoryRecipesView from "./CategoryRecipesView";
import CategoryNavigation from "./CategoryNavigation";

const CategoryRecipesPage = (props) => {
  return (
    <div className="recipes-container">
      <CategoryNavigation />
      <CategoryRecipesView
        categoryName={(props.match && props.match.params.category) || ""}
      />
    </div>
  );
};

export default CategoryRecipesPage;
