import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ displayedName, categoryName, iconPath }) => {
  return (
    <li className="category">
      <NavLink to={`/recipes/${categoryName}`} className="category__button">
        <img src={iconPath} className="category__icon" />
        {displayedName}
      </NavLink>
    </li>
  );
};

export default Category;
