import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Navber/Navber";

import Slider2 from "./Slider2";

const Products = () => {
    const params = useParams();
    console.log(params);
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <Navber></Navber>
            <Slider2></Slider2>
            {
                products.map((product, index) => (
                    <div className="grid lg:grid-cols-2 gap-4 my-6 mx-10"
                        key={index}>
                        <div>
                            <img className="lg:w-[600px] lg:h-[450px] rounded-lg" src={product.image} alt={product.name} />
                        </div>
                        <div className="bg-slate-300 text-center rounded-lg lg:pt-14">
                            <h3 className="lg:text-4xl font-semibold">Name:{product.name}</h3>
                            <h3 className="lg:text-2xl font-semibold">Brand Name: {product.bandName}</h3>
                            <h3 className="lg:text-2xl font-semibold"> Product Type:{product.type}</h3>
                            <h3 className="lg:text-2xl font-semibold"> Price:{product.price}$</h3>
                            <h3 className="lg:text-2xl lg:font-semibold"> Product Rating:{product.rating}</h3>
                        </div>
                        <button className="btn btn-secondary text-center">Update </button>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;
