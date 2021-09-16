import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import SingleRecipeView from "./SingleRecipeView";
import LikeButton from "./LikeButton";

const RecipeThumbnail = ({ recipe, handleLikeChange }) => {
  const history = useHistory();
  const location = useLocation();
  const { recipeId } = useParams();

  const likeButton = (
    <LikeButton
      recipeId={recipe.id}
      liked={recipe.liked}
      handleLikeChange={handleLikeChange}
    />
  );

  const [shouldModalBeOpened, setShouldModalBeOpened] = useState(false);

  useEffect(() => {
    setShouldModalBeOpened(recipeId === recipe.id);
  }, [recipeId]);

  return (
    <li className="thumbnail" data-id={recipe.id}>
      <Link to={`${location.pathname}/${recipe.id}`}>
        <figure className="thumbnail__img">
          <img src={recipe.photo} alt={recipe.name} />
          <figcaption className="thumbnail__name">{recipe.name}</figcaption>
        </figure>
      </Link>
      {likeButton}
      {shouldModalBeOpened && (
        <SingleRecipeView
          isOpen={shouldModalBeOpened}
          recipe={recipe}
          handleClose={() => {
            history.goBack();
            setShouldModalBeOpened(false);
          }}
          likeButton={likeButton}
        />
      )}
    </li>
  );
};

export default RecipeThumbnail;
