import React, { useState } from "react";
import { useSearchRecipes } from "../api/useQuery";
import RecipeThumbnail from "./RecipeThumbnail";

const SearchPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const { data, isLoading, refetch } = useSearchRecipes(searchPhrase);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <main className="main-container">
      <section className="section-content">
        <input
          type="text"
          className="recipe-form__input"
          name="recipe_name"
          value={searchPhrase}
          onChange={(e) => {
            setSearchPhrase(e.target.value);
          }}
        />
        <button
          className="button"
          type="button"
          formTarget="_self"
          onClick={handleSubmit}
        >
          Szukaj
        </button>

        {!!data && (
          <ul className="thumbnails-container">
            {data.map((recipe) => {
              return (
                <RecipeThumbnail
                  key={`${recipe._id}s`}
                  recipe={{
                    id: recipe._id,
                    name: recipe.name,
                    photo: `http://localhost:5000/${recipe.img.replace(
                      "\\",
                      "/"
                    )}`,
                    category: recipe.category,
                    spices: recipe.spices,
                    ingredients: recipe.ingredients,
                    steps: recipe.steps,
                    comments: recipe.comments,
                  }}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
