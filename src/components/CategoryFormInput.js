import React from "react";

const CategoryFormInput = ({ displayedName, categoryName, iconPath }) => {
  return (
    <li className="category category--small">
      <input
        type="radio"
        className="input__category"
        id={categoryName}
        name="category"
        value={categoryName}
      />
      <label htmlFor={categoryName}>
        <figure>
          <img src={iconPath} className="category__icon" />
          <figcaption className="category__caption">{displayedName}</figcaption>
        </figure>
      </label>
    </li>
  );
};

export default CategoryFormInput;
