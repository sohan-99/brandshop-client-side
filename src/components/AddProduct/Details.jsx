import { useLoaderData, } from 'react-router-dom';
import Navber from '../Navber/Navber';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Details = () => {
    const { user } = useContext(AuthContext);
    const email = user.email

    const productDetails = useLoaderData();
    const handleAddCart = () => {
        const { price, sdec, image, type, bandName, name } = productDetails;
        const addProduct = { price, sdec, image, type, bandName, name,email:email }
        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Add to My Cart!');
            })
    }
    // console.log(productDetails);
    // const params = useParams();
    // console.log(params)
    const { price, sdec, image, type, bandName, name } = productDetails;
    // console.log(name);

    return (
        <div>
            <Navber></Navber>
            <div className="card lg:max-w-4xl mx-auto bg-gray-400 shadow-xl mt-10">
                <figure><img className=" mt-9 rounded lg:w-[400px]" src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="lg:text-2xl text-center lg:font-extrabold">{name}</h2>
                    <p className="lg:text-2xl text-center lg:font-extrabold">Brand : {bandName}</p>
                    <p className="lg:text-2xl text-center lg:font-extrabold">Type : {type}</p>
                    <p className="lg:text-2xl text-center lg:font-extrabold">price : {price}$</p>
                    <p className='lg:text-lg lg:font-medium'> <span className="text-xl font-bold">About This product : </span><br />
                        {sdec}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleAddCart} className="btn btn-secondary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;









