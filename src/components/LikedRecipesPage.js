import React, { useEffect } from "react";
import { useFetchLikedRecipes } from "../api/useQuery";

const LikedRecipesPage = () => {
  const { data, isLoading, refetch } = useFetchLikedRecipes();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <main className="main-container">
      <section className="section-content">
        {!!data && (
          <ul className="thumbnails-container">
            {console.log(data)}
            {data.map((recipe) => {
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
                    category: recipe.category,
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

export default LikedRecipesPage;
