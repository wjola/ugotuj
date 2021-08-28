import React, { useState } from "react";
import ReactDOM from "react-dom";
import { categories } from "../utils/categories";
import CategoryFormInput from "./CategoryFormInput";
import MultipleFormInput from "./MultipleFormInput";
import FileInput from "./FileInput";
import SingleRecipeView from "./SingleRecipeView";

const AddRecipePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recipeName, setRecipeName] = useState("");
  const [chosenCategory, setChosenCategory] = useState("");
  const [currentSpice, setCurrentSpice] = useState("");
  const [spices, setSpices] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [currentStep, setCurrentStep] = useState("");
  const [steps, setSteps] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState([]);
  const [file, setFile] = useState(null);

  const storeFile = (file) => {
    setFile(file);
  };

  const cleanUpForm = () => {
    setSpices([]);
    setIngredients([]);
    setSteps([]);
    setComments([]);
    setFile(null);
    setRecipeName("");
    setChosenCategory("");
    setCurrentIngredient("");
    setCurrentSpice("");
    setCurrentStep("");
    setCurrentComment("");
  };

  const chooseCategory = (category) => {
    setChosenCategory(category);
  };

  const displayModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="main-container">
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
                      chooseCategory={chooseCategory}
                      chosenCategory={chosenCategory}
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
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
            </li>
            <MultipleFormInput
              savedData={spices}
              setSavedData={setSpices}
              headerText={"Podaj przyprawy"}
              dataType={"spices"}
              currentValue={currentSpice}
              setCurrentValue={setCurrentSpice}
            />
            <MultipleFormInput
              savedData={ingredients}
              setSavedData={setIngredients}
              headerText={"Podaj składniki"}
              dataType={"ingredients"}
              currentValue={currentIngredient}
              setCurrentValue={setCurrentIngredient}
            />
            <MultipleFormInput
              savedData={steps}
              setSavedData={setSteps}
              headerText={"Podaj kroki przygotowania"}
              dataType={"steps"}
              currentValue={currentStep}
              setCurrentValue={setCurrentStep}
            />
            <MultipleFormInput
              savedData={comments}
              setSavedData={setComments}
              headerText={"Dodaj komentarze do przepisu"}
              dataType={"comments"}
              currentValue={currentComment}
              setCurrentValue={setCurrentComment}
            />
            <li className="recipe-form__element">
              <h5>Załącz zdjęcie</h5>
              <FileInput uploadedFile={file} storeFile={storeFile} />
              {file && console.log(file)}
            </li>
          </ol>
        </form>
        <button className="button" type="button" formTarget="_self">
          Dodaj przepis
        </button>
        <button
          className="button button--empty"
          type="button"
          formTarget="_self"
          onClick={displayModal}
        >
          Podgląd
        </button>
        <button className="button button--empty" onClick={cleanUpForm}>
          Wyczyść formularz
        </button>
      </section>
      <SingleRecipeView
        isOpen={isModalOpen}
        recipe={{
          name: recipeName,
          photo: file,
          category: chooseCategory,
          spices,
          ingredients,
          steps,
          comments,
        }}
      />
    </main>
  );
};

export default AddRecipePage;
