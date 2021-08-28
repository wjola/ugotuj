import React, { useEffect } from "react";
import { useFetchRecipes } from "../api/useQuery";

const CategoryRecipesView = ({ categoryName }) => {
  const { data, isLoading, refetch } = useFetchRecipes(categoryName);

  useEffect(() => {
    refetch();
  }, [categoryName]);

  return (
    <main className="category-recipes-container">
      <section className="section-content">
        {isLoading && <p>Loading...</p>}
        {data &&
          data.map((recipe) => {
            return <p key={recipe.name}>{recipe.name}</p>;
          })}
      </section>
    </main>
  );
};

export default CategoryRecipesView;
