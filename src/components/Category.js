import React from "react";
import { NavLink } from "react-router-dom";

const Category = ({ displayedName, categoryName, iconPath }) => {
  return (
    <li className="category">
      <NavLink
        to={`/recipes/${categoryName}`}
        className="category__button"
        activeClassName="category__button--chosen"
      >
        <img src={iconPath} className="category__icon" />
        <span className="category__caption">{displayedName}</span>
      </NavLink>
    </li>
  );
};

export default Category;
