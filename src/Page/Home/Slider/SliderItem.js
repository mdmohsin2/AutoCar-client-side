import React from 'react';
import './SliderItem.css';

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full hidden sm:block">
            <div className='carouser-image'>
                <img src={image} alt='' className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h2 className='text-5xl font-bold text-white'>
                    WELCOME TO AUTO CAR
                </h2>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 titles top-1/4 mt-28">
                <p className='text-white text-xl'>Autocar is a second hand car dealer website, where used cars are sold</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 titles left-64 top-1/4 mt-52">
                <button className="btn btn-outline btn-warning">Click here</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;