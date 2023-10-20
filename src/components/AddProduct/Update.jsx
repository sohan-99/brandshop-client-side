/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import Navber from "../Navber/Navber";
import { toast } from "react-toastify";


const Update = () => {
    const params = useParams()
    console.log(params);
    const lodederData = useLoaderData();
    console.log(lodederData);
    const { image, name, bandName, type, price, shortdescription
        , rating } = lodederData;

    const handleAddProducts = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.img.value;
        const name = form.name.value;
        const bandName = form.bnam.value;
        const type = form.type.value;
        const price = form.price.value;
        const sdec = form.sdec.value;
        const rating = form.rating.value;
        const user = { image, name, bandName, type, price, sdec, rating };
        console.log(user);

        fetch(`http://localhost:5000/update/${lodederData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.mofifiCount > 0) {
                    toast.success('Data Modified Successfully!')
                }
            })



    }
    return (
        <div>
            <Navber></Navber>

            <div className="bg-[#F4F3F0] mt-2 p-24">
                <h2 className="text-3xl mb-4 text-center font-extrabold">Update Product</h2>
                <form onSubmit={handleAddProducts}>
                    {/* one  */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium">Image :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="img" defaultValue={image} placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium ">Name :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={name} placeholder="Name" name="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* two  */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium">Brand Name :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="bnam" defaultValue={bandName} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium">Type :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Type" defaultValue={type} name="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* three */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium">Price :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="text-lg font-medium">Short description :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Short description" defaultValue={shortdescription} name="sdec" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* four */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-lg font-medium">Rating :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Rating" defaultValue={rating} name="rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center"> {/* Centered button */}
                        <input type="submit" value="Update Product" className="btn bg-[#5576ce]" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;