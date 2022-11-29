import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext)

    // backend data loaded
    const url = `http://localhost:5000/bookings?email=${user?.email}`


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-4xl text-orange-400 text-center my-4'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-white" data-theme="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 &&
                            bookings?.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={booking.image} alt='img' />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.title}</td>
                                <td>{booking.price}</td>
                                <td className='text-error'>Pay</td>
                                {/* <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span
                                            className='text-primary btn-sm'
                                        >Paid</span>
                                    }
                                </td> */}
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;