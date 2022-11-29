import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import BookingModal from '../Home/CategoryPage/BookingModal/BookingModal';
import CategoryPageItems from '../Home/CategoryPage/CategoryPageItems';
import Loading from '../Shared/Loading/Loading';

const Advertise = () => {
    const [data, setData] = useState(null)
    const { user } = useContext(AuthContext);
    // advertise 
    const url = `http://localhost:5000/advertise`
    const { data: advertise = [], refetch, isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl text-orange-500 text-center my-4 font-bold'>My Advertise</h2>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 my-6'>

                {
                    advertise.length > 0 &&
                    advertise.map(product => <CategoryPageItems key={product._id}
                        product={product}
                        refetch={refetch}
                        setData={setData}
                    ></CategoryPageItems>)
                }
            </div>
            {
                data &&
                <BookingModal
                    data={data}
                    user={user}
                    setData={setData}
                ></BookingModal>
            }
        </div>
    );
};

export default Advertise;