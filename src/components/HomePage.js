import React from 'react';
import CategoryNavigation from './CategoryNavigation';
import CategoryRecipesView from './CategoryRecipesView';

const HomePage = () => {
    return (
        <div>
            <CategoryNavigation />
            <CategoryRecipesView />
            <p>HomePage</p>
        </div>
    );
}

export default HomePage;