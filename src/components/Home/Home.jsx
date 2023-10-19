/* eslint-disable no-unused-vars */


import { AuthContext } from "../../Provider/AuthProvider";
import ExtraSection1 from "../ExtraSection/ExtraSection1";
import ExtraSection2 from "../ExtraSection/ExtraSection2";
import Footer from "../Footer/Footer";
import Slider from "../Header/Slider";
import Navber from "../Navber/Navber";
import BrandCard from "./BrandCard";
import { useContext, useEffect, useState } from "react";


const Home = () => {
    
    const [brands, setBrands] = useState([]);
    // console.log(brands);
    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    })

    return (
        <div className="mt-6">
            <Navber></Navber>
            <h2 className="lg:text-5xl lg:font-bold text-center my-3"><span className="text-cyan-500">Advertise Products</span> </h2>
            <Slider></Slider>
            <h2 className="lg:text-5xl lg:font-bold text-center my-3"><span className="text-red-600">FIND </span> YOUR PERFECT<span className="text-red-600"> MATCH</span></h2>
            <h2 className="text-center text-lg font-medium">EXPLORE AND FIND RIGHT ONE</h2>
            <div className="  grid lg:grid-cols-3 md:grid-cols-2 gap-x-3">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
            <Footer></Footer>
        </div>
    );
};

export default Home;