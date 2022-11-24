import React from 'react';
import OurInfo from '../OurInfo/OurInfo';
import Slider from '../Slider/Slider';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Speciality></Speciality>
           <OurInfo></OurInfo>
        </div>
    );
};

export default Home;