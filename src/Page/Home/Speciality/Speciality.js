import React from 'react';
import './Speciality.css'
import img1 from '../../../assets/team/20.jpg'
import img2 from '../../../assets/team/22.jpg'
import img3 from '../../../assets/team/23.jpg'
import img4 from '../../../assets/team/21.jpg'

const Speciality = () => {
    return (
        <div className='py-16'>
            <h1 className='text-5xl m-5 text-orange-400'>Our Team</h1>
            <div className=" card grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-md">
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                        <img className='w-44 rounded-full' src={img1} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">

                        <h2 className="card-title">Name : Michel Brose</h2>
                        <p>The beauty of candid wedding photography lies in people's natural reactions. It makes people click their best emotions and express the feelings of that moment through a picture...</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                    <img className='w-44 rounded-full' src={img4} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : Nanci Polici</h2>
                        <p>Light is necessary to take photos of your jewelry. A room with windows next to a wall is a good option. The bigger the window, the more light you'll get...</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                    <img className='w-44 rounded-full' src={img3} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : David Morgan </h2>
                        <p>What is a picture concept?
                            Conceptual photography is a type of photography that illustrates an idea. There have been illustrative photographs made since the medium's invention...</p>
                    </div>
                </div>
                <div className='border-double border-4 border-indigo-300 hover:border-indigo-600 m-3 '>
                    <figure className="px-10 pt-10">
                    <img className='w-44 rounded-full' src={img2} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name : Sana Khan</h2>
                        <p>A fashion photographer takes photographs of the latest clothes, accessories, hairstyles and make-up. Fashion photographers are responsible for how clothing is presented in advertising campaigns...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speciality;