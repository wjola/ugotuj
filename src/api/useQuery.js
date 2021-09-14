import { useQuery, useMutation } from "react-query";

const useFetchRecipes = (category = "") => {
  return useQuery(
    "categoryRecipes",
    () =>
      fetch(`http://localhost:5000/recipes/${category}`).then((res) =>
        res.json()
      ),
    { enabled: false }
  );
};

const usePostRecipe = () => {
  return useMutation((recipe) => {
    return fetch(`http://localhost:5000/recipes`, {
      method: "POST",
      header: { "Content-Type": "multipart/form-data" },
      body: recipe,
    }).then(() => console.log("dodano przepis"));
  });
};

export { useFetchRecipes, usePostRecipe };
