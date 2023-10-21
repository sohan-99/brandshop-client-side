import { Link, useLoaderData, } from "react-router-dom";
import Navber from "../Navber/Navber";

import Slider2 from "./Slider2";

const Products = () => {
    // const params = useParams();
    // console.log(params);
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <Navber></Navber>
            <Slider2></Slider2>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-5 gap-y-7 ">
                {
                    products.map((product, index) => (
                        <div className="grid grid-cols-1"
                            key={index}>
                            <div>
                                <img className="lg:w-[600px] md:w-[500px] w-[300px] lg:h-[450px] md:mx-auto mx-auto rounded-lg" src={product.image} alt={product.name} />
                            </div>
                            <div className="bg-slate-300 lg:w-[600px] md:w-[500px] w-[300px] mx-auto text-center rounded-lg py-6 my-4">
                                <h3 className="lg:text-4xl font-semibold">Name:{product.name}</h3>
                                <h3 className="lg:text-2xl font-semibold">Brand Name: {product.bandName}</h3>
                                <h3 className="lg:text-2xl font-semibold"> Product Type:{product.type}</h3>
                                <h3 className="lg:text-2xl font-semibold"> Price:{product.price}$</h3>
                                <h3 className="lg:text-2xl lg:font-semibold"> Product Rating:{product.rating}</h3>
                            </div>
                            <div className="flex justify-around ">
                                <Link to={`/update/${product._id}`}>
                                    <button className="btn btn-secondary text-center">Update </button>
                                </Link>
                                <Link to={`/details/${product._id}`}>
                                    <button className="btn btn-secondary text-center">Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
                {!products.length &&
                    <div className="text-center lg:w-1/2 md:w-3/4 w-full mx-auto">
                        <h3 className="text-lg lg:text-2xl mt-6 mb-3">
                            🌟 Important Announcement for Vivo Users 🌟
                        </h3>
                        <h2 className="text-xl lg:text-2xl mb-3">
                            Dear Vivo Community,
                        </h2>
                        <p className="text-base lg:text-lg mb-4">
                            We are thrilled to announce that we are working tirelessly to bring you an exciting new software update! This update is designed to enhance your overall Vivo experience with improved performance, new features, and enhanced security. We appreciate your patience and support as we strive to deliver the best for you.
                        </p>
                        <h4 className="text-lg lg:text-xl mb-4">
                            Stay tuned for more updates and keep enjoying your Vivo devices!
                        </h4>
                        <h3 className="text-xl lg:text-xl mb-1">
                            Best regards,
                        </h3>
                        <h3 className="text-xl lg:text-xl">
                            The Vivo Team
                        </h3>
                    </div>
                
}
        </div>
        </div >
    );
};

export default Products;
