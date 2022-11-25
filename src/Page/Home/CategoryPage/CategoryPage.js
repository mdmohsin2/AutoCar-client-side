import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryPage = () => {
    const products = useLoaderData()
    return (
        <div>
            <h2>this is CategoryPage{products.length}</h2>
        </div>
    );
};

export default CategoryPage;