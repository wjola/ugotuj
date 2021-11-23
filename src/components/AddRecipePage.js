import React from "react";
import RecipeForm from "./RecipeForm";
import { usePostRecipe } from "../api/useQuery";

const AddRecipePage = () => {
  const mutation = usePostRecipe();

  const addRecipe = (recipe) => {
    mutation.mutate(recipe);
  };

  return <RecipeForm onSubmit={addRecipe} />;
};

export default AddRecipePage;
