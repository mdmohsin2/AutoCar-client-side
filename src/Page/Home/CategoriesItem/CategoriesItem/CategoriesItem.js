import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesItems from './CategoriesItems';

const CategoriesItem = () => {
    const { data: appointmentOption = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        <progress className="progress progress-primary w-56"></progress>
    }

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {
                appointmentOption.map(option => <CategoriesItems key={option._id}
                    option={option}
                    isLoading={isLoading}
                ></CategoriesItems>)
            }
        </div>
    );
};

export default CategoriesItem;