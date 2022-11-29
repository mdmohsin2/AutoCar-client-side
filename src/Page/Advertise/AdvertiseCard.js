import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AdvertiseCard = ({ product }) => {
    const { _id, picture, title, location, isVerified, isAdvertise, isPaid, yearOfUse, postTime, sellerName, resalePrice, originalPrice, description } = product;
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
                <div className="card-actions">
                    <label
                        // onClick={() => setData(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">Book now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;