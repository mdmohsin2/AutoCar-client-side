import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryPageItems from './CategoryPageItems';

const CategoryPage = () => {
    const products = useLoaderData()
    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
            {
                products.map(product => <CategoryPageItems key={product._id}
                    product={product}
                ></CategoryPageItems>)
            }
        </div>
    );
};

export default CategoryPage;