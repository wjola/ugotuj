import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import SingleRecipeView from "./SingleRecipeView";

const RecipeThumbnail = ({ recipe }) => {
  const location = useLocation();
  const { recipeId } = useParams();

  const history = useHistory();
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
      {shouldModalBeOpened && (
        <SingleRecipeView
          isOpen={shouldModalBeOpened}
          recipe={recipe}
          handleClose={() => {
            // history.push(`${location.pathname}`);
            history.goBack();
            setShouldModalBeOpened(false);
          }}
        />
      )}
    </li>
  );
};

export default RecipeThumbnail;
