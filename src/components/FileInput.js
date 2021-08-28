import React, { useRef, useEffect, useState } from "react";
import DownloadIcon from "../../images/download.svg";

const FileInput = ({ uploadedFile, storeFile }) => {
  const [dragging, setDragging] = useState(false);
  const [filePreview, setFilePreview] = useState();
  const [isAlertNeeded, setIsAlertNeeded] = useState(false);
  const dropRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!dragging) {
      setDragging(true);
    }
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(true);
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    setDragging(false);
    storeFile(file);
    reader.onload = (r) => {
      setFilePreview(r.target.result);
    };
    reader.readAsDataURL(file);
    isAlertNeeded && setIsAlertNeeded(false);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    storeFile(file);
    reader.onload = (r) => {
      setFilePreview(r.target.result);
    };
    reader.readAsDataURL(file);
    isAlertNeeded && setIsAlertNeeded(false);
  };

  useEffect(() => {
    const fileBox = dropRef.current;
    fileBox.addEventListener("dragenter", handleDragIn);
    fileBox.addEventListener("dragleave", handleDragOut);
    fileBox.addEventListener("dragover", handleDragOver);
    fileBox.addEventListener("drop", handleDrop);

    return () => {
      fileBox.removeEventListener("dragenter", handleDragIn);
      fileBox.removeEventListener("dragleave", handleDragOut);
      fileBox.removeEventListener("dragover", handleDragOver);
      fileBox.removeEventListener("drop", handleDrop);
    };
  }, []);

  useEffect(() => {
    if (!uploadedFile) {
      setFilePreview(null);
    }
  }, [uploadedFile]);

  return (
    <div
      ref={dropRef}
      className={`file__box ${dragging && "file__box--highlighted"}`}
    >
      <input
        className="input__file"
        id="file"
        type="file"
        name="picture"
        accept=".png,.jpeg,.jpg"
        onChange={handleFileInput}
      />
      <label className="file__label" htmlFor="file">
        {!uploadedFile && (
          <img className="file__img file__icon" src={DownloadIcon} />
        )}
        {!!filePreview && (
          <img className="file__img file__preview" src={filePreview} />
        )}
        {!uploadedFile && (
          <p className="file__text">
            <strong>Wybierz plik </strong>
            lub przenieś go tutaj.
          </p>
        )}
        {!!uploadedFile && (
          <p className="file__text">
            Wybrano plik
            <strong className="file__name">{uploadedFile.name}</strong>
            Aby zmienić plik, kliknij lub przenieś go tutaj.
          </p>
        )}
      </label>
    </div>
  );
};

export default FileInput;
