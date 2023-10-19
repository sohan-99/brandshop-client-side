/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    // console.log(brand);
    const {  brand_name, brand_image } = brand || {};

    return (
        <Link to={brand_name}>
        <div className='lg:my-6 lg:mx-2 mx-3'>
            <img className='lg:w-[400px] h-[250px] rounded-3xl' src={brand_image} alt={brand_name} />
            <p className=' lg:text-4xl lg:font-bold text-center -mt-16'> {brand_name}</p>
        </div>
        </Link>
    );
};

export default BrandCard;
