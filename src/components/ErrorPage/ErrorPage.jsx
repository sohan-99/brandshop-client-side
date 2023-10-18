import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div id="error-page" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="lg:max-w-full max-w-md p-4 bg-white shadow-md rounded-lg">
            <img
                src="https://i.ibb.co/nwpDps1/Download-Error-404-Background-for-free.jpg" 
                alt="Error"
                className="mx-auto h-auto w-32 md:w-48 lg:w-64"
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-4">
                Oops! Something went wrong.
            </h1>
            <p className="text-gray-600 text-center mt-2">
                The page you are looking for does not exist.
            </p>
            <p>
                <i>{useRouteError.statusText || useRouteError.message}</i>
            </p>
            <div className="flex justify-center mt-4">
                <Link to="/">
                    <button className="btn btn-neutral">Go Back to Home</button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default ErrorPage;