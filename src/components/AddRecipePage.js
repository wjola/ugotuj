import React, { useState } from "react";
import { categories } from "../utils/categories";
import CategoryFormInput from "./CategoryFormInput";
import MultipleFormInput from "./MultipleFormInput";
import FileInput from "./FileInput";

const AddRecipePage = () => {
  const [spices, setSpices] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [comments, setComments] = useState([]);
  const [file, setFile] = useState(null);

  const addElement = (e) => {
    e.preventDefault();
    const parentLiElement = e.target.closest("li");
    const elementType = parentLiElement.dataset.type;
    const newElement = e.target.parentNode.firstChild.value;

    if (newElement !== "") {
      switch (elementType) {
        case "spices":
          setSpices([...spices, newElement]);
          break;
        case "ingredients":
          setIngredients([...ingredients, newElement]);
          break;
        case "steps":
          setSteps([...steps, newElement]);
          break;
        case "comments":
          setComments([...comments, newElement]);
          break;
        default:
          return;
      }
      e.target.parentNode.firstChild.value = "";
    }
  };

  const removeElement = (e) => {
    e.preventDefault();
    const liElement = e.target.closest("li");
    const elementType = e.target.closest(".recipe-form__element").dataset.type;

    switch (elementType) {
      case "spices":
        setSpices(spices.filter((spice) => spice !== liElement.textContent));
        return;
      case "ingredients":
        setIngredients(
          ingredients.filter(
            (ingredient) => ingredient !== liElement.textContent
          )
        );
        return;
      case "steps":
        setSteps(steps.filter((step) => step !== liElement.textContent));
        return;
      case "comments":
        setComments(
          comments.filter((comment) => comment !== liElement.textContent)
        );
        return;
      default:
        return;
    }
  };

  const storeFile = (file) => {
    setFile(file);
  };

  return (
    <section className="section-content">
      <form className="recipe-form">
        <ol>
          <li className="recipe-form__element">
            <h5>Wybierz kategorię</h5>
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
            <h5>Podaj nazwę potrawy</h5>
            <input
              type="text"
              className="recipe-form__input"
              name="recipe_name"
            />
          </li>
          <MultipleFormInput
            savedData={spices}
            onAddClick={addElement}
            onRemoveClick={removeElement}
            headerText={"Podaj przyprawy"}
            dataType={"spices"}
          />
          <MultipleFormInput
            savedData={ingredients}
            onAddClick={addElement}
            onRemoveClick={removeElement}
            headerText={"Podaj składniki"}
            dataType={"ingredients"}
          />
          <MultipleFormInput
            savedData={steps}
            onAddClick={addElement}
            onRemoveClick={removeElement}
            headerText={"Podaj kroki przygotowania"}
            dataType={"steps"}
          />
          <MultipleFormInput
            savedData={comments}
            onAddClick={addElement}
            onRemoveClick={removeElement}
            headerText={"Dodaj komentarze do przepisu"}
            dataType={"comments"}
          />
          <li className="recipe-form__element">
            <h5>Załącz zdjęcie</h5>
            <FileInput uploadedFile={file} storeFile={storeFile} />
            {file && console.log(file)}
          </li>
        </ol>
      </form>
    </section>
  );
};

export default AddRecipePage;
