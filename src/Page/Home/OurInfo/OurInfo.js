import React from 'react';
import bg from '../../../assets/Ourinfo/shutterstock_765129346-e1529311789497.jpg'

const OurInfo = () => {
    return (
        <div className=''>
            <div className="mb-20 mt-14 bg-gray-700 grid grid-cols-1 px-10 md:grid-cols-2 py-32 ">
                <figure><img className='img-size' src={bg} alt="Album" />
                </figure>
                <div className="text-white pl-5">
                    <h1 className='text-5xl my-5 text-orange-400 font-bold italic'>Our Services</h1>
                    <h2 className="card-title text-4xl mt-10">What Services Do We Provide</h2>
                    <p className='my-8'>
                        Our Main aim is to buy and sell used cars and to ensure that the customer gets the best service, we only provide online service.
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Contact me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInfo;