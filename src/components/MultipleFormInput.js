import React from "react";
import TrashIcon from "../../images/trash.svg";

const MultipleFormInput = ({
  savedData,
  onAddClick,
  onRemoveClick,
  headerText,
  dataType,
}) => {
  return (
    <li className="recipe-form__element" data-type={dataType}>
      <h5>{headerText}</h5>
      <div>
        <input type="text" className="recipe-form__input" name="ingredient" />
        <button className="button--add" onClick={onAddClick}>
          +
        </button>
      </div>
      <ul className="ingredients__dynamic-list">
        {savedData.map((dataElement, index) => {
          return (
            <li className="ingredients__item" key={"i" + index}>
              {dataElement}
              <button className="button--remove" onClick={onRemoveClick}>
                <img
                  src={TrashIcon}
                  className="button--remove__icon"
                  alt="Usuń"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default MultipleFormInput;
