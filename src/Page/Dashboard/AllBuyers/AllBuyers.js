import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    // backend data loaded
    const url = `http://localhost:5000/allBuyer`


    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {

        // backend data loaded
        const url = `http://localhost:5000/users/Buyer/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('Delete Confirm')
            })
    }


    return (
        <div>
            <h2 className='text-4xl text-orange-400 text-center my-2'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-white" data-theme="dark">
                    <thead>
                        <tr>
                            <th></th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>accountType</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.length > 0 &&
                            bookings?.map((booking, idx) => <tr key={booking._id}>
                                <th>{idx + 1}</th>
                                {/* <td>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={booking.image} alt='img' />
                                    </div>
                                </div>
                            </td> */}
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.accountType}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(booking._id)}
                                        className='btn btn-outline btn-error'>
                                        delete
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;