import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading/Loading';

const Report = () => {
    const url = `http://localhost:5000/reports`
    const { data: reports = [], refetch, isLoading } = useQuery({
        queryKey: ['reports'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });

    // handle delete here setup
    const handleDelete = id => {
        // backend data loaded
        const url = `http://localhost:5000/report/${id}`

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

    if(isLoading){
      return  <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-sm w-full text-white" data-theme="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Id</th>
                            <th>Seller Name</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports.length > 0 &&
                            reports?.map((report, idx) => <tr key={report._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={report.picture} alt='img' />
                                        </div>
                                    </div>
                                </td>
                                <td>{report._id}</td>
                                <td>{report.sellerName}</td>
                                <td>{report.location}</td>
                                <td>{report.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(report._id)}
                                        className='btn btn-outline btn-sm btn-error'>Delete</button>
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

export default Report;