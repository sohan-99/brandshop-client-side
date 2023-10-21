import { Outlet } from "react-router-dom";



const Layout = () => {
    return (
        <div className="max-w-full mx-auto">

            <Outlet></Outlet>
        </div>
    );
};

export default Layout;