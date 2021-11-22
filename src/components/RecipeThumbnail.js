import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Skeleton from "react-loading-skeleton";
import SingleRecipeView from "./SingleRecipeView";
import LikeButton from "./LikeButton";

const RecipeThumbnail = ({ recipe, handleLikeChange }) => {
  const history = useHistory();
  const location = useLocation();
  const { recipeId } = useParams();

  const [shouldModalBeOpened, setShouldModalBeOpened] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setShouldModalBeOpened(recipeId === recipe.id);
  }, [recipeId]);

  return (
    <li className="thumbnail" data-id={recipe.id}>
      <Link to={`${location.pathname}/${recipe.id}`}>
        <figure className="thumbnail__img">
          <img
            className={imageLoaded ? "imageLoaded" : ""}
            src={recipe.photo}
            alt={recipe.name}
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
          {!imageLoaded && <Skeleton height="100%" />}
          <figcaption className="thumbnail__name">{recipe.name}</figcaption>
        </figure>
      </Link>
      <LikeButton
        recipeId={recipe.id}
        liked={recipe.liked}
        handleLikeChange={handleLikeChange}
      />
      {shouldModalBeOpened && (
        <SingleRecipeView
          isOpen={shouldModalBeOpened}
          recipe={recipe}
          handleClose={() => {
            history.goBack();
            setShouldModalBeOpened(false);
          }}
          likeButton={
            <LikeButton
              recipeId={recipe.id}
              liked={recipe.liked}
              handleLikeChange={handleLikeChange}
              isRecipeOpen={shouldModalBeOpened}
            />
          }
        />
      )}
    </li>
  );
};

export default RecipeThumbnail;
