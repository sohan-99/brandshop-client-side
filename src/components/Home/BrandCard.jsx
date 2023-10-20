/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    // console.log(brand);
    const {  brand_name, brand_image } = brand || {};

    return (
        <Link to={brand_name}>
        <div className='lg:my-6 lg:mx-2 my-5 mx-2'>
            <img className='lg:w-[400px] md:w-[350px] w-[300px] lg:h-[250px] md:h-[230px] rounded-3xl' src={brand_image} alt={brand_name} />
            <p className=' lg:text-4xl md:text-3xl text-2xl lg:font-bold md:font-semibold font-medium text-center -mt-16'> {brand_name}</p>
        </div>
        </Link>
    );
};

export default BrandCard;
