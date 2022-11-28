import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    // backend data loaded
    const url = `http://localhost:5000/products?email=${user?.email}`


    const { data: products = [],refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-4xl text-orange-500 text-center my-4 font-bold'>My Products</h2>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 my-6'>
                {
                    products.map(product => <MyProduct key={product._id}
                        product={product}
                        refetch={refetch}
                    ></MyProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;