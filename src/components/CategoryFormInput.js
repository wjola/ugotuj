import React from "react";

const CategoryFormInput = ({
  displayedName,
  categoryName,
  iconPath,
  chooseCategory,
  chosenCategory,
}) => {
  return (
    <li className="category category--small">
      <input
        type="radio"
        className="input__category"
        id={categoryName}
        name="category"
        value={categoryName}
        onChange={(e) => e.target.checked && chooseCategory(e.target.value)}
        checked={chosenCategory === categoryName}
      />
      <label htmlFor={categoryName} className="input__category__label">
        <img src={iconPath} className="category__icon" />
        <span className="category__caption">{displayedName}</span>
      </label>
    </li>
  );
};

export default CategoryFormInput;
