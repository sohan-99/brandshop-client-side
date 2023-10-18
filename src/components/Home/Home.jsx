/* eslint-disable no-unused-vars */


import ExtraSection1 from "../ExtraSection/ExtraSection1";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import Slider from "../Header/Slider";
import Navber from "../Navber/Navber";
import BrandCard from "./BrandCard";
import { useEffect, useState } from "react";


const Home = () => {
    const [brands, setBrands] = useState([]);
    console.log(brands);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    })

    return (
        <div className="mt-6">
            <Navber></Navber>
            <h2 className="lg:text-4xl lg:font-bold text-center my-3"><span className="text-cyan-500">Advertise Products</span> </h2>
            <Slider></Slider>
            <h2 className="lg:text-5xl lg:font-bold text-center my-3"><span className="text-red-600">Our</span> Mobile <span className="text-red-600"> Catagory</span></h2>
            <div className="  grid lg:grid-cols-3 md:grid-cols-2 gap-x-3">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
            
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;