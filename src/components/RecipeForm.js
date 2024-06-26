import React, { useState } from "react";
import Compressor from "compressorjs";
import { categories } from "../utils/categories";
import CategoryFormInput from "./CategoryFormInput";
import MultipleFormInput from "./MultipleFormInput";
import FileInput from "./FileInput";
import SingleRecipeView from "./SingleRecipeView";

const RecipeForm = ({
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

  const storeFile = async (file) => {
    new Compressor(file, {
      quality: 0.7,
      success: (compressedResult) => {
        setFile(
          new File([compressedResult], file.name, {
            type: compressedResult.type,
          })
        );
      },
    });
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
    const isValid =
      name &&
      chosenCategory &&
      ingredients.length > 0 &&
      steps.length > 0 &&
      file;
    setIsValidationVisible(!isValid);
    return isValid;
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
      <section className="section-content section-content--form">
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
          className="button recipe-form__button"
          type="button"
          formTarget="_self"
          onClick={handleSubmit}
        >
          Dodaj przepis
        </button>
        <div className="button-container">
          <button
            className="button button--empty recipe-form__button"
            type="button"
            formTarget="_self"
            onClick={displayModal}
          >
            Podgląd
          </button>
          <button
            className="button button--empty recipe-form__button"
            onClick={cleanUpForm}
          >
            Wyczyść formularz
          </button>
        </div>
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

export default RecipeForm;
