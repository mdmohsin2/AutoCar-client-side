import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesItems from './CategoriesItems';

const CategoriesItem = () => {
    const { data: appointmentOption = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-tau.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <progress className="progress progress-primary w-56"></progress>
    }

    return (
        <div>
            <h2 className='text-3xl text-orange-500 font-bold mt-16'>product categories</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    appointmentOption.map(option => <CategoriesItems key={option._id}
                        option={option}
                        isLoading={isLoading}
                    ></CategoriesItems>)
                }
            </div>
        </div>
    );
};

export default CategoriesItem;