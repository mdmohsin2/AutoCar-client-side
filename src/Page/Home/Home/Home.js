import React from 'react';
import Advertise from '../../Advertise/Advertise';
import CategoriesItem from '../CategoriesItem/CategoriesItem/CategoriesItem';
import OurInfo from '../OurInfo/OurInfo';
import Slider from '../Slider/Slider';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Advertise></Advertise>
           <CategoriesItem></CategoriesItem>
           <Speciality></Speciality>
           <OurInfo></OurInfo>
        </div>
    );
};

export default Home;