import React, { useState } from "react";
import { categories } from "../utils/categories";
import CategoryFormInput from "./CategoryFormInput";
import TrashIcon from "../../images/trash.svg";

const AddRecipePage = () => {
  const [spices, setSpices] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const addSpice = (e) => {
    e.preventDefault();
    const spice = e.target.parentNode.firstChild.value;
    if (spice !== "") {
      setSpices([...spices, spice]);
      e.target.parentNode.firstChild.value = "";
    }
  };

  const removeSpice = (e) => {
    e.preventDefault();
    const spiceElement = e.target.closest("li");
    setSpices(spices.filter((spice) => spice !== spiceElement.textContent));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const ingredient = e.target.parentNode.firstChild.value;
    if (ingredient !== "") {
      setIngredients([...ingredients, ingredient]);
      e.target.parentNode.firstChild.value = "";
    }
  };

  const removeIngredient = (e) => {
    e.preventDefault();
    const ingredientElement = e.target.closest("li");
    setIngredients(
      ingredients.filter(
        (ingredient) => ingredient !== ingredientElement.textContent
      )
    );
  };

  return (
    <section className="section-content">
      <form className="recipe-form">
        <ol>
          <li className="recipe-form__element">
            <p>Wybierz kategorię</p>
            <ul className="category__list">
              {categories.map((category) => {
                return (
                  <CategoryFormInput
                    displayedName={category.displayedName}
                    categoryName={category.name}
                    iconPath={category.iconPath}
                    key={`input-${category.name}`}
                  />
                );
              })}
            </ul>
          </li>
          <li className="recipe-form__element">
            <p>Podaj nazwę potrawy</p>
            <input
              type="text"
              className="recipe-form__input"
              name="recipe_name"
            />
          </li>
          <li className="recipe-form__element">
            <p>Podaj przyprawy</p>
            <div>
              <input type="text" className="recipe-form__input" name="spice" />
              <button className="button--add" onClick={addSpice}>
                +
              </button>
            </div>
            <ul className="ingredients__dynamic-list">
              {spices.map((spice, index) => {
                return (
                  <li className="ingredients__item" key={index}>
                    {spice}
                    <button className="button--remove" onClick={removeSpice}>
                      <img
                        src={TrashIcon}
                        className="button--remove__icon"
                        alt="Usuń"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="recipe-form__element">
            <p>Podaj składniki</p>
            <div>
              <input
                type="text"
                className="recipe-form__input"
                name="ingredient"
              />
              <button className="button--add" onClick={addIngredient}>
                +
              </button>
            </div>
            <ul className="ingredients__dynamic-list">
              {ingredients.map((ingredient, index) => {
                return (
                  <li className="ingredients__item" key={"i" + index}>
                    {ingredient}
                    <button
                      className="button--remove"
                      onClick={removeIngredient}
                    >
                      <img
                        src={TrashIcon}
                        className="button--remove__icon"
                        alt="Usuń"
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        </ol>
      </form>
    </section>
  );
};

export default AddRecipePage;
