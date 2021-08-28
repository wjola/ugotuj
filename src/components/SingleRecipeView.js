import React from "react";

const SingleRecipeView = ({ isOpen, recipe }) => {
  return (
    <dialog open={isOpen} className="modal">
      <div className="recipe-container">
        <button className="button--close"></button>
        <div className="recipe__photo-container">
          <figure className="recipe__photo-box">
            <img src={recipe.photo} />
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
          </div>
        </article>
      </div>
    </dialog>
  );
};

export default SingleRecipeView;
