import React, { useRef } from "react";
import TrashIcon from "../../images/trash.svg";

const MultipleFormInput = ({
  savedData,
  setSavedData,
  headerText,
  dataType,
  currentValue,
  setCurrentValue,
  showWarning = false,
}) => {
  const inputRef = useRef(null);

  const addInput = () => {
    if (currentValue !== "") {
      setSavedData([...savedData, currentValue]);
      setCurrentValue("");
      inputRef.current.focus();
    }
  };

  const handleInputKeyUp = (e) => {
    if (e.key === "Enter") {
      addInput();
    }
  };

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  return (
    <li className="recipe-form__element" data-type={dataType}>
      <h5>{headerText}</h5>
      <div className="input-container">
        <input
          type="text"
          className="recipe-form__input"
          name="ingredient"
          value={currentValue}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyUp}
          ref={inputRef}
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
        {savedData.length > 0 &&
          savedData.map((dataElement, index) => {
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
      {showWarning && savedData.length === 0 && (
        <p className="recipe-form__warning">Dodaj element!</p>
      )}
    </li>
  );
};

export default MultipleFormInput;
