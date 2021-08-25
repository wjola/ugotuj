import React from 'react';

const Category = ({ displayedName, iconPath }) => {
    return (
        <li className="category">
            <button className="category__button">
                <img src={iconPath} className="category__icon" />
                {displayedName}
            </button>
        </li>
    );
}

export default Category;