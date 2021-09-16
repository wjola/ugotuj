import React from "react";
import Recipes from "./Recipes";
import CategoryNavigation from "./CategoryNavigation";
import { useFetchRecipes } from "../api/useQuery";

const CategoryRecipesPage = (props) => {
  const { data, isLoading } = useFetchRecipes(
    (props.match && props.match.params.category) || "soups"
  );

  return (
    <div className="recipes-container">
      <CategoryNavigation />
      <main className="category-recipes-container">
        <section className="section-content">
          {isLoading && <p>Ładowanie..</p>}
          <Recipes data={data} />
        </section>
      </main>
    </div>
  );
};

export default CategoryRecipesPage;
