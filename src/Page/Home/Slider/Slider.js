import React from 'react';
import img1 from '../../../assets/Slider/1.png'
import img2 from '../../../assets/Slider/2.png'
import img3 from '../../../assets/Slider/3.png'
import img4 from '../../../assets/Slider/4.jpg'
import SliderItem from './SliderItem';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
]

const Slider = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <SliderItem
                    key={slide.id}
                    slide={slide}
                ></SliderItem>)
            }
        </div>
    );
};

export default Slider;