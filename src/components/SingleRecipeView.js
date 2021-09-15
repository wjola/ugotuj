import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const SingleRecipeView = ({ isOpen = true, recipe, handleClose }) => {
  const portalTarget = document.getElementById("recipe-modal");
  const [imgPreview, setImgPreview] = useState(null);

  const handleClickOutsideDialog = (e) => {
    if (e.target.classList[0] == "modal") {
      handleClose();
    }
  };

  const getImagePreview = () => {
    if (typeof recipe.photo === "string") {
      setImgPreview(recipe.photo);
    } else {
      const reader = new FileReader();
      reader.onload = (r) => {
        setImgPreview(r.target.result);
      };
      reader.readAsDataURL(recipe.photo);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutsideDialog);
      document.body.style.overflow = "hidden";

      getImagePreview();
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideDialog);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutsideDialog);
      document.body.style.overflow = "hidden";

      getImagePreview();

      return () => {
        document.removeEventListener("click", handleClickOutsideDialog);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <dialog open={isOpen} className="modal">
      <div className="recipe-container">
        <button
          className="button--close"
          onClick={() => handleClose()}
        ></button>
        <div className="recipe__photo-container">
          <figure className="recipe__photo">
            <img src={imgPreview} />
          </figure>
        </div>
        <article className="recipe__text-container">
          <h2 className="recipe__name">{recipe.name}</h2>
          <div className="recipe__details">
            <div className="recipe__ingredients">
              <div className="ingredients__column">
                <h3 className="recipe__heading">Składniki</h3>
                <ul className="recipe__list recipe__list--ingredients">
                  {recipe.ingredients.map((item, index) => (
                    <li key={`ingredient-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              {recipe.spices.length > 0 && (
                <div className="ingredients__column">
                  <h3 className="recipe__heading">Przyprawy</h3>
                  <ul className="recipe__list recipe__list--ingredients">
                    {recipe.spices.map((item, index) => (
                      <li key={`spices-${index}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="recipe__steps">
              <h3 className="recipe__heading">Przygotowanie</h3>
              <ol className="recipe__list recipe__list--steps">
                {recipe.steps.map((item, index) => (
                  <li key={`steps-${index}`}>{item}</li>
                ))}
              </ol>
            </div>
            {recipe.comments.length > 0 && (
              <div className="recipe__comments">
                <h3 className="recipe__heading">Komentarze</h3>
                <ol className="recipe__list recipe__list--ingredients">
                  {recipe.comments.map((item, index) => (
                    <li key={`comments-${index}`}>{item}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </article>
      </div>
    </dialog>,
    portalTarget
  );
};

export default SingleRecipeView;
