import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import SingleRecipeView from "./SingleRecipeView";

const RecipeThumbnail = ({ recipe }) => {
  const { recipeId } = useParams();
  const shouldModalBeOpened = recipeId === recipe.id;

  return (
    <li className="thumbnail" data-id={recipe.id}>
      <Link to={`/recipes/${recipe.category}/${recipe.id}`}>
        <figure className="thumbnail__img">
          <img src={recipe.photo} alt={recipe.name} />
          <figcaption className="thumbnail__name">{recipe.name}</figcaption>
        </figure>
      </Link>
      {shouldModalBeOpened && <SingleRecipeView recipe={recipe} />}
    </li>
  );
};

export default RecipeThumbnail;
