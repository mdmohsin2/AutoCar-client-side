import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { user } = useContext(AuthContext)
    // backend data loaded
    const url = `http://localhost:5000/allSellers`

    const { data: bookings = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })


    // // // virify butoon
    // const urls = `http://localhost:5000/users/${user.email}`

    // const { data: users = [] } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(urls)
    //         const data = await res.json();
    //         return data;
    //     }
    // })





    const handleDelete = id => {

        // backend data loaded
        const url = `http://localhost:5000/users/Seller/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
                toast.success('Delete Confirm')
            })
    }


    const handleUpdate = id => {
        const url = `http://localhost:5000/users/verify/${id}`
        console.log(id);
        fetch(url, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
                toast.success('verify success ')
            })
    }








    if (isLoading) {
      return  <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl text-orange-400 text-center my-2'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full text-white" data-theme="dark">
                    <thead>
                        <tr>
                            <th></th>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>accountType</th>
                            <th>verify</th>
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
                                <td onClick={() => handleUpdate(booking._id)}>

                                    {
                                        booking?.isVerified ?
                                            <p className='text-orange-500 font-bold'>verified</p>
                                            :
                                            <button className='btn btn-outline btn-success'>Unverified</button>
                                    }

                                </td>
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

export default AllSellers;