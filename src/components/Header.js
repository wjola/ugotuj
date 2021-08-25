import React from 'react';
import PageNavigation from './PageNavigation';
import SpoonAndForkLogo from '../../images/spoon-and-fork.svg';

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header__link-box">
                <img src={SpoonAndForkLogo} className="header__logo" />
                <h1 className="header__text">Weźże ugotuj!</h1>
            </a>
            <PageNavigation />
        </header>
    );
}

export default Header;