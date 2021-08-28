import { useQuery } from "react-query";

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

export { useFetchRecipes };
