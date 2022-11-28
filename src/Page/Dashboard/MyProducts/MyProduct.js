import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = ({ product }) => {
    const { _id, picture, title, location, isVerified, yearOfUse, postTime, sellerName, resalePrice, originalPrice, description } = product;
    const { loading } = useContext(AuthContext);
    if (loading) {
        <Loading></Loading>
    }

    const handleDelete = id => {

        // backend data loaded
        const url = `http://localhost:5000/products/${id}`

        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="card bg-base-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='w-full h-[200px] rounded-xl' src={picture} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{isVerified && <FaCheckCircle className='text-green-400'></FaCheckCircle>} Model : {title}</h2>
                <div className='flex items-center text-orange-500 mt-2 font-bold'>
                    <div className='mr-8'>OrginalPrice ${originalPrice}</div>
                    <div>ResalePrice ${resalePrice}</div>
                </div>
                <div className='flex items-center mt-3 text-green-500 font-bold'>
                    <div className='mr-8'>Location : {location}</div>
                    <div>Use : {yearOfUse} year</div>
                </div>
                <div className=' mt-3 text-red-500 font-bold'>
                    <div>SellerName : {sellerName}</div>
                    <div className='text-violet-600 my-2'>postTime : {postTime}</div>
                </div>
                <p>{description.length > 100 ? description.slice(0, 200) + '...' : description}</p>
                <div className="card-actions">
                    <button className='btn w-60 font-bold mt-3' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;