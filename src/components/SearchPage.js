import React, { useEffect, useState } from "react";
import { useSearchRecipes } from "../api/useQuery";
import Recipes from "./Recipes";

const SearchPage = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const { data, isLoading, refetch } = useSearchRecipes(searchPhrase);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPhrase && refetch();
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
        <form className="search-container" onSubmit={handleSubmit}>
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
            <Recipes data={data} />
          </div>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
