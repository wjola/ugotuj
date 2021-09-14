import React from "react";
import TrashIcon from "../../images/trash.svg";

const MultipleFormInput = ({
  savedData,
  setSavedData,
  headerText,
  dataType,
  currentValue,
  setCurrentValue,
}) => {
  const addInput = () => {
    setSavedData([...savedData, currentValue]);
    setCurrentValue("");
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      addInput();
    }
  };

  return (
    <li className="recipe-form__element" data-type={dataType}>
      <h5>{headerText}</h5>
      <div>
        <input
          type="text"
          className="recipe-form__input"
          name="ingredient"
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyPress={handleInputKeyPress}
        />
        <button
          className="button--add"
          onClick={(e) => {
            e.preventDefault();
            addInput();
          }}
        >
          +
        </button>
      </div>
      <ul className="ingredients__dynamic-list">
        {savedData.map((dataElement, index) => {
          return (
            <li className="ingredients__item" key={"i" + index}>
              {dataElement}
              <button
                className="button--remove"
                onClick={(e) => {
                  e.preventDefault();
                  setSavedData(
                    savedData.filter((element) => element !== dataElement)
                  );
                }}
              >
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
