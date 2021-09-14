import React from "react";
import { NavLink } from "react-router-dom";
import ListIcon from "../../images/clipboard.svg";
import AddIcon from "../../images/add.svg";
import SearchIcon from "../../images/search.svg";
import LikeIcon from "../../images/love.svg";

const PageNavigation = () => {
  return (
    <nav className="page-nav">
      <NavLink to="/" className="page-nav__element">
        <p>Lista przepisów</p>
        <img src={ListIcon} className="page-nav__icon" />
      </NavLink>
      <NavLink to="/add" className="page-nav__element">
        <p>Dodaj przepis</p>
        <img src={AddIcon} className="page-nav__icon" />
      </NavLink>
      <NavLink to="/search" className="page-nav__element">
        <p>Wyszukaj</p>
        <img src={SearchIcon} className="page-nav__icon" />
      </NavLink>
      <NavLink to="/liked" className="page-nav__element">
        <p>Ulubione</p>
        <img src={LikeIcon} className="page-nav__icon" />
      </NavLink>
    </nav>
  );
};

export default PageNavigation;
