import React from "react";
import RecipeFormPage from "./RecipeFormPage";
import { usePostRecipe } from "../api/useQuery";

const AddRecipePage = () => {
  const mutation = usePostRecipe();
  const { isLoading, isError, error, data, isSuccess } = mutation;

  const addRecipe = (recipe) => {
    mutation.mutate(recipe);
  };

  return <RecipeFormPage onSubmit={addRecipe} />;
};

export default AddRecipePage;
