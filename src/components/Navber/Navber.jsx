/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const links =
        <>
            <li className="text-xl font-semibold rounded-full"><NavLink to='/'>Home</NavLink></li>
            {/* <li className="text-xl font-semibold "><NavLink to='/about'>About</NavLink></li> */}
            <li className="text-xl font-semibold "><NavLink to='/addproducts'>Add Product</NavLink></li>
            <li className="text-xl font-semibold "><NavLink to='/mycart'>My Cart</NavLink></li>
            <li className="text-xl font-semibold "><NavLink to='/signup'>Register</NavLink></li>
            {/* <li className="text-xl font-semibold "><NavLink to='/login'>Login</NavLink></li> */}
        </>
    return (
        <div className="navbar  rounded-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
                        {links}
                    </ul>
                </div>
                {/* <img className="w-[160px] h-20 " src="https://i.ibb.co/BnxJMb3/Whats-App-Image-2023-10-18-at-2-11-09-PM.jpg" alt="" /> */}
                <Link to='/'>
                    <h2 className="lg:text-4xl md:text-2xl text-base  lg:font-extrabold md:font-bold font-normal"><span className="text-indigo-900">Device</span>  <span className="text-red-600">Dazzle</span></h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 rounded-full">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                
                <div className=" mr-2">
                    <div >
                        {user && user.uid ? (
                            <div className="flex   items-center">
                                <p className="text-lg mr-3 font-extrabold">{user.displayName}</p>
                                <img className="w-12 h-12 rounded-full border-4 border-green-600" src={user.photoURL} alt="User Profile" />
                            </div>
                        ) : (
                            <div className="avatar offline">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/4FDQMgt/user.png" />
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                {
                    user ?
                    <div className="lg:text-xl lg:font-semibold lg:mr-9">
                        <button onClick={handleSignOut} className="btn btn-primary ">Sign Out</button>
                        </div>
                        :
                        <Link to='/login'>
                        <button className="btn rounded-full btn-primary lg:text-xl lg:font-semibold">Login</button>
                    </Link>
                }
            </div>

        </div>
    );
};

export default Navber;