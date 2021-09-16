import React from "react";
import RecipeThumbnail from "./RecipeThumbnail";
import { usePatchRecipeLike } from "../api/useQuery";

const Recipes = ({ data }) => {
  // const mutation = usePatchRecipeLike();

  const handleLikeChange = (recipeId, liked) => {
    mutation.mutate(
      { recipeId, liked: !liked } //,
      // {
      //   onSuccess: () => refetch(),
      // }
    );
  };

  return (
    <ul className="thumbnails-container">
      {!!data &&
        data.map((recipe) => {
          return (
            <RecipeThumbnail
              key={`${recipe._id}s`}
              recipe={{
                id: recipe._id,
                name: recipe.name,
                photo: `http://localhost:5000/${recipe.img.replace("\\", "/")}`,
                category: recipe.category,
                spices: recipe.spices,
                ingredients: recipe.ingredients,
                steps: recipe.steps,
                comments: recipe.comments,
                liked: !!recipe.liked,
              }}
              handleLikeChange={handleLikeChange}
            />
          );
        })}
    </ul>
  );
};

export default Recipes;
