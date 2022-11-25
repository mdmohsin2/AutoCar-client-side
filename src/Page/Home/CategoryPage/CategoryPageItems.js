import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const CategoryPageItems = ({product}) => {
    const {title, picture} = product;
    const {loading} = useContext(AuthContext);
    if(loading){
        <progress className="progress progress-error w-56"></progress>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='w-full h-[200px] rounded-xl' src={picture} alt="Shoes"  />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryPageItems;