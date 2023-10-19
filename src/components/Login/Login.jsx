/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Navber/Navber";
import { useContext } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../../firebase/firebase.config";
import { AuthContext } from './../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGooglePopUp = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Login!');
                // You can navigate the user here after successful login if needed.
                // navigate(location?.state? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');



        // console.log(email,password);
        signIn(email, password)
            .then(result => {
                // console.log(result.user);
                toast.success('Successfully Login!')

                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message);
            })

    }

    return (
        <div>

            <Navber></Navber>
            <div className="mt-14 mb-9 flex flex-col items-center justify-center">
                <div className="bg-gray-300  lg:max-w-lg w-[80%] md:w-[85%] lg:w-[85%] p-8 rounded-lg shadow-lg">
                    <h2 className="lg:text-4xl md:text-2xl font-extrabold text-center text-green-400 ">Welcome Back</h2>
                    <h1 className="lg:text-4xl md:text-2xl font-extrabold text-center text-blue-600 mb-6">
                        Login to Your Account
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4 ">
                        <div>
                            <label className="block text-black lg:text-lg md:text-base  font-medium">Email</label>
                            <span className="indicator-item badge">Required</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-black lg:text-lg md:text-base font-medium">Password</label>
                            <span className="indicator-item badge">Required</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
                                required
                            />
                            <Link className="text-blue-600 block mt-2 text-base font-medium">
                                Forgot password?
                            </Link>
                        </div>

                        <div className="text-center">
                            <button className="bg-blue-500 hover:bg-blue-600 lg:text-xl font-semibold text-white py-3 px-6 rounded-full transition duration-300 w-full">
                                Login
                            </button>
                        </div>
                    </form>
                    <button onClick={handleGooglePopUp} className="bg-blue-500 hover:bg-blue-600 mt-6 lg:text-xl font-semibold text-white py-3 px-6 rounded-full transition duration-300 w-full">
                        Google Login
                    </button>
                    <p className="text-center mt-4 text-black text-base font-medium">
                        Don't have an account?{" "}
                        <Link className="text-blue-600 font-semibold text-lg" to="/signup">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Login;