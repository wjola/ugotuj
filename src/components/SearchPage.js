import React, { useEffect, useState } from "react";
import { useSearchRecipes } from "../api/useQuery";
import RecipeThumbnail from "./RecipeThumbnail";

const SearchPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const { data, isLoading, refetch } = useSearchRecipes(searchPhrase);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    refetch();
    return () => {
      setSearchPhrase("");
      refetch();
    };
  }, []);

  return (
    <main className="main-container">
      <section className="section-content">
        <form className="search-container">
          <input
            type="text"
            className="search__input"
            name="search"
            placeholder="Wpisz szukaną frazę..."
            value={searchPhrase}
            onChange={(e) => {
              setSearchPhrase(e.target.value);
            }}
          />
          <button
            className="button search__button"
            type="button"
            formTarget="_self"
            onClick={handleSubmit}
          >
            Szukaj
          </button>
        </form>
        {isLoading && <p>Ładowanie..</p>}
        {!!data && data.length > 0 && (
          <div className="search__results">
            <h3 className="search__header">
              Wyniki wyszukiwania dla:{" "}
              <span className="search-phrase">{searchPhrase}</span>
            </h3>
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
          </div>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
