import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
import CategoryPageItems from './CategoryPageItems';

const CategoryPage = () => {
    const products = useLoaderData()
    const [data, setData] = useState(null)
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    products.map(product => <CategoryPageItems key={product._id}
                        product={product}
                        setData={setData}
                    ></CategoryPageItems>)
                }
            </div>
            {
                data &&
                <BookingModal
                data={data}
                user={user}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryPage;