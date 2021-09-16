import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useQueryClient } from "react-query";
import { usePatchRecipeLike } from "../api/useQuery";
import LoveIcon from "../../images/love.svg";
import LoveFullIcon from "../../images/love-full.svg";

const LikeButton = ({ recipeId, isRecipeOpen = false, liked }) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const mutation = usePatchRecipeLike();

  const handleLikeChange = (recipeId, liked) => {
    mutation.mutate(
      { recipeId, liked: !liked },
      {
        onSuccess: (data, variables) => {
          if (location.pathname == "/search") {
            queryClient.setQueryData(
              ["search", { _id: variables.recipeId, liked: variables.liked }],
              data
            );
            queryClient.invalidateQueries("search");
          } else if (location.pathname == "/liked") {
            queryClient.setQueryData([
              "likedRecipes",
              { _id: variables.recipeId, liked: variables.liked },
            ]);
            queryClient.invalidateQueries("likedRecipes");
          } else {
            queryClient.setQueryData(
              [
                "categoryRecipes",
                { _id: variables.recipeId, liked: variables.liked },
              ],
              data
            );
            queryClient.invalidateQueries("categoryRecipes");
          }
        },
      }
    );
  };

  return (
    <button
      className={`like-icon like-icon--${isRecipeOpen ? "big" : "small"}`}
      onClick={() => handleLikeChange(recipeId, liked)}
    >
      <img src={liked ? LoveFullIcon : LoveIcon} />
    </button>
  );
};

export default LikeButton;
