import { useQuery, useMutation } from "react-query";

export const useFetchRecipes = (category = "") => {
  return useQuery(["categoryRecipes", category], () =>
    fetch(`${REACT_APP_BACKEND_URL}/recipes/${category}`).then((res) => {
      return res.json();
    })
  );
};

export const useFetchLikedRecipes = () => {
  return useQuery("likedRecipes", () =>
    fetch(REACT_APP_BACKEND_URL + `/recipes/liked`).then((res) => res.json())
  );
};

export const useSearchRecipes = (searchPhrase = "") => {
  return useQuery("search", () =>
    fetch(REACT_APP_BACKEND_URL + `/recipes/search/${searchPhrase}`).then(
      (res) => res.json()
    )
  );
};

export const usePostRecipe = () => {
  return useMutation((recipe) => {
    return fetch(REACT_APP_BACKEND_URL + `/recipes`, {
      method: "POST",
      header: { "Content-Type": "multipart/form-data" },
      body: recipe,
    }).then(() => console.log("Recipe added"));
  });
};

export const usePatchRecipeLike = () => {
  return useMutation((data) => {
    return fetch(REACT_APP_BACKEND_URL + `/recipe/${data.recipeId}`, {
      method: "PATCH",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({ liked: data.liked }),
    }).then((result) => {
      return result.json();
    });
  });
};
