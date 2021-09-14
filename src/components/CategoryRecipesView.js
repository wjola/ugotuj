import React, { useEffect } from "react";
import { useFetchRecipes } from "../api/useQuery";
import RecipeThumbnail from "./RecipeThumbnail";

const CategoryRecipesView = ({ categoryName = "" }) => {
  const { data, isLoading, refetch } = useFetchRecipes(categoryName);

  useEffect(() => {
    refetch();
  }, [categoryName]);

  return (
    <main className="category-recipes-container">
      <section className="section-content">
        {isLoading && <p>Ładowanie..</p>}
        {!categoryName && <p>Wybierz kategorię, żeby wyświetlić przepisy.</p>}
        {!!categoryName && (
          <ul className="thumbnails-container">
            {data &&
              data.map((recipe) => {
                return (
                  <RecipeThumbnail
                    key={`${recipe._id}s`}
                    recipe={{
                      id: recipe._id,
                      name: recipe.name,
                      photo: `http://localhost:5000/${recipe.img.replace(
                        "\\",
                        "/"
                      )}`,
                      category: categoryName,
                      spices: recipe.spices,
                      ingredients: recipe.ingredients,
                      steps: recipe.steps,
                      comments: recipe.comments,
                    }}
                  />
                );
              })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default CategoryRecipesView;
