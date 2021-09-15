import React from "react";
import { NavLink } from "react-router-dom";
import ListIcon from "../../images/clipboard.svg";
import AddIcon from "../../images/add.svg";
import SearchIcon from "../../images/search.svg";
import LikeIcon from "../../images/love.svg";

const PageNavigation = () => {
  return (
    <nav className="page-nav">
      <ul className="page-nav__list">
        <li>
          <NavLink
            to="/recipes"
            className="page-nav__element"
            activeClassName="page-nav__element--active"
          >
            <p>Lista przepisów</p>
            <img src={ListIcon} className="page-nav__icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className="page-nav__element"
            activeClassName="page-nav__element--active"
          >
            <p>Dodaj przepis</p>
            <img src={AddIcon} className="page-nav__icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="page-nav__element"
            activeClassName="page-nav__element--active"
          >
            <p>Wyszukaj</p>
            <img src={SearchIcon} className="page-nav__icon" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/liked"
            className="page-nav__element"
            activeClassName="page-nav__element--active"
          >
            <p>Ulubione</p>
            <img src={LikeIcon} className="page-nav__icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
