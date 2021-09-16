import React from "react";
import { Link } from "react-router-dom";
import PageNavigation from "./PageNavigation";
import SpoonAndForkLogo from "../../images/spoon-and-fork.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/recipes/soups" className="header__link-box">
        <img src={SpoonAndForkLogo} className="header__logo" />
        <h1 className="header__text">Weźże ugotuj!</h1>
      </Link>
      <PageNavigation />
    </header>
  );
};

export default Header;
