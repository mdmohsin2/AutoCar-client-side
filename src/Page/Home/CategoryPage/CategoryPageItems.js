import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';
import useBuyer from '../../../hooks/useBuyer';

const CategoryPageItems = ({ product, refetch, setData, }) => {
    const { loading, user } = useContext(AuthContext);
    const { picture, title, location, isVerified, yearOfUse, postTime, sellerName, resalePrice, originalPrice, description } = product;
    const [isBuyer] = useBuyer(user?.email)

    // handle report
    const handleReport = id => {
        fetch(`https://assignment-12-server-tau.vercel.app/report/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('report successfully')
                }
                else {
                    toast.error(`this product already reported`)
                }
            })

    }

    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
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
                    <div className='flex items-center justify-between'>
                        <label
                            onClick={() => setData(product)}
                            htmlFor="booking-modal"
                            className="btn btn-primary">Book now
                        </label>
                        <button
                            onClick={() => handleReport(product._id)}
                            className='btn btn-error ml-4'>
                            report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPageItems;