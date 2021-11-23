import React from "react";
import LogoIcon from "../../images/spoon-and-fork.svg";

const PageLoader = () => {
  return (
    <div className="loader-container">
      <img src={LogoIcon} className="loader__img" alt="Loading" />
    </div>
  );
};

export default PageLoader;
