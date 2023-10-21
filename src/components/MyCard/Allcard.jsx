/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const Allcard = ({ item,setRefetch }) => {
    const { _id, name } = item;

    const handleDelet = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/mycart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'YourCart has been deleted.',
                                'success'
                            )
                            setRefetch(true)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card lg:max-w-4xl mx-auto bg-gray-400 shadow-xl mt-10">
                <figure><img className=" mt-9 rounded lg:w-[400px]" src={item.image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="lg:text-2xl text-center lg:font-extrabold">Name :{name}</h2>
                    <p className="lg:text-2xl text-center lg:font-extrabold">Brand : {item.bandName}</p>
                    <p className="lg:text-2xl text-center lg:font-extrabold">Type : {item.type}</p>
                    <p className="lg:text-2xl text-center lg:font-extrabold">price : {item.price}$</p>
                    <p className='lg:text-lg lg:font-medium'> <span className="text-xl font-bold">About This product : </span><br />
                        {item.sdec}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelet(_id)} className="btn bg-red-600 text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allcard;