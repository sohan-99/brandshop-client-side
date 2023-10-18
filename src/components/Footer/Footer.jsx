

const Footer = () => {
    return (
        <footer className="bg-indigo-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4  gap-3">
                    <div className="col-span-1 ">
                        <h3 className="text-3xl font-bold  mb-4">About Our Company</h3>
                        <p className="text-gray-200 text-lg font-medium ">
                            We are a forward-thinking company committed to innovation and excellence. Our mission is to provide the best solutions for our customers.
                        </p>
                    </div>
                    <div className="ml-12 col-span-1">
                        <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
                        <ul className="text-gray-200 text-lg font-medium ">
                            <li className="mb-2"><a href="/" className="hover:text-red-600">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-red-600">Products</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-red-600">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-red-600">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-200 text-lg font-medium">Bogura,Sherpur</p>
                        <p className="text-gray-200 text-lg font-medium">sohan75632@gmail.com</p>
                        <p className="text-gray-200 text-lg font-medium">+880 1722 562 608</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-3xl font-bold mb-4">Connect with Us</h3>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                            <img className="w-16 " src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                            <img className="w-16 rounded-full" src="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png" alt="" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-300">
                               <img className="w-16 rounded-full" src="https://i.ibb.co/yWd9Fxn/instagram-6338393-1280.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-800" />
                <p className="text-center text-gray-200 lg:text-xl">&copy; 2023 Device Dazzle Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
