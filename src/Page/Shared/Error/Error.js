import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/Error/error.jpg'

const Error = () => {
    return (
        <div>
            <h4 className='text-5xl font-bold text-center mt-12 text-orange-500'>Please Try with the correct route <Link className='text-red-400 underline underline-offset-4' to='/'>Home</Link></h4>
            <img className='text-center mx-auto mt-10' src={bg} alt="" />
        </div>
    );
};

export default Error;