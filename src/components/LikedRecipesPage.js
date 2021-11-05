import React from "react";
import { useFetchLikedRecipes } from "../api/useQuery";
import Recipes from "./Recipes";

const LikedRecipesPage = () => {
  const { data, isLoading } = useFetchLikedRecipes();

  return (
    <main className="main-container">
      <section className="section-content">
        {isLoading && <p>Ładowanie..</p>}
        <Recipes data={data} />
      </section>
    </main>
  );
};

export default LikedRecipesPage;
