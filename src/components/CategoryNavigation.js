import React from "react";
import Category from "./Category";
import { categories } from "../utils/categories";

const CategoryNavigation = () => {
  return (
    <ul className="category-nav">
      {categories.map((category) => {
        return (
          <Category
            key={category.name}
            name={category.name}
            displayedName={category.displayedName}
            categoryName={category.name}
            iconPath={category.iconPath}
          />
        );
      })}
    </ul>
  );
};

export default CategoryNavigation;
