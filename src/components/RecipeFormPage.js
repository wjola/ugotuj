import React, { useState } from "react";
import { categories } from "../utils/categories";
import CategoryFormInput from "./CategoryFormInput";
import MultipleFormInput from "./MultipleFormInput";
import FileInput from "./FileInput";
import SingleRecipeView from "./SingleRecipeView";

const RecipeFormPage = ({
  recipeName = "",
  recipeCategory = "",
  recipeSpices = [],
  recipeIngredients = [],
  recipeSteps = [],
  recipeComments = [],
  recipeFile = null,
  onSubmit,
}) => {
  const [isValidationVisible, setIsValidationVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState(recipeName);
  const [chosenCategory, setChosenCategory] = useState(recipeCategory);
  const [currentSpice, setCurrentSpice] = useState("");
  const [spices, setSpices] = useState(recipeSpices);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [ingredients, setIngredients] = useState(recipeIngredients);
  const [currentStep, setCurrentStep] = useState("");
  const [steps, setSteps] = useState(recipeSteps);
  const [currentComment, setCurrentComment] = useState("");
  const [comments, setComments] = useState(recipeComments);
  const [file, setFile] = useState(recipeFile);

  const storeFile = (file) => {
    setFile(file);
  };

  const cleanUpForm = () => {
    setSpices([]);
    setIngredients([]);
    setSteps([]);
    setComments([]);
    setFile(null);
    setName("");
    setChosenCategory("");
    setCurrentIngredient("");
    setCurrentSpice("");
    setCurrentStep("");
    setCurrentComment("");
    setIsValidationVisible(false);
  };

  const chooseCategory = (category) => {
    setChosenCategory(category);
  };

  const displayModal = () => {
    if (isFormValid()) {
      setIsModalOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const recipeObject = createFormDataObject();
      onSubmit(recipeObject);
      cleanUpForm();
    }
  };

  const isFormValid = () => {
    setIsValidationVisible(
      !(
        name &&
        chosenCategory &&
        ingredients.length > 0 &&
        steps.length > 0 &&
        file
      )
    );
  };

  const handleCloseRecipePreview = () => {
    setIsModalOpen(false);
  };

  const createFormDataObject = () => {
    let formData = new FormData();

    formData.append("category", chosenCategory);
    formData.append("name", name);
    formData.append("img", file);
    formData.append("ingredients", JSON.stringify(ingredients));
    formData.append("spices", JSON.stringify(spices));
    formData.append("steps", JSON.stringify(steps));
    formData.append("comments", JSON.stringify(comments));

    return formData;
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
              {isValidationVisible && !chosenCategory && (
                <p className="recipe-form__warning">Wybierz kategorię!</p>
              )}
            </li>
            <li className="recipe-form__element">
              <h5>Podaj nazwę potrawy</h5>
              <input
                type="text"
                className="recipe-form__input"
                name="recipe_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {isValidationVisible && !name && (
                <p className="recipe-form__warning">Wpisz nazwę przepisu!</p>
              )}
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
              showWarning={isValidationVisible}
            />
            <MultipleFormInput
              savedData={steps}
              setSavedData={setSteps}
              headerText={"Podaj kroki przygotowania"}
              dataType={"steps"}
              currentValue={currentStep}
              setCurrentValue={setCurrentStep}
              showWarning={isValidationVisible}
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
              {isValidationVisible && !file && (
                <p className="recipe-form__warning">Dodaj plik!</p>
              )}
            </li>
          </ol>
        </form>
        <button
          className="button"
          type="button"
          formTarget="_self"
          onClick={handleSubmit}
        >
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
          name,
          photo: file,
          category: chosenCategory,
          spices,
          ingredients,
          steps,
          comments,
        }}
        handleClose={handleCloseRecipePreview}
      />
    </main>
  );
};

export default RecipeFormPage;
