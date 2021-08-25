import React from 'react';
import { categories } from '../utils/categories';
import CategoryFormInput from './CategoryFormInput';

const AddRecipePage = () => {
    return (
        <section className="section-content">
            <form className="recipe-form">
                <ol>
                    <li className="recipe-form__element recipe-form__categories">
                        <p>Wybierz kategorię</p>
                        <ul className="category__list">
                            {categories.map((category) => {
                                return <CategoryFormInput
                                    displayedName={category.displayedName}
                                    categoryName={category.name}
                                    iconPath={category.iconPath}
                                    key={`input-${category.name}`}
                                />
                            })}
                        </ul>
                    </li>
                </ol>
            </form>
        </section>
    );
}

export default AddRecipePage;