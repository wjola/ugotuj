import { useQuery, useMutation } from "react-query";

const useFetchRecipes = (category = "") => {
  return useQuery(["categoryRecipes", category], () =>
    fetch(`http://localhost:5000/recipes/${category}`).then((res) => res.json())
  );
};

const useFetchLikedRecipes = () => {
  return useQuery("likedRecipes", () =>
    fetch(`http://localhost:5000/recipes/liked`).then((res) => res.json())
  );
};

const useSearchRecipes = (searchPhrase = "") => {
  return useQuery(
    "search",
    () =>
      fetch(`http://localhost:5000/recipes/search/${searchPhrase}`).then(
        (res) => res.json()
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

const usePatchRecipeLike = () => {
  return useMutation((data) => {
    return fetch(`http://localhost:5000/recipe/${data.recipeId}`, {
      method: "PATCH",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: data.liked }),
    }).then((result) => {
      return result.json();
    });
  });
};

export {
  useFetchRecipes,
  useFetchLikedRecipes,
  useSearchRecipes,
  usePostRecipe,
  usePatchRecipeLike,
};
