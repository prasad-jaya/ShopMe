import { Link } from "react-router";

const Footer = () =>{

    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="w-full  max-w-full p-4 md:flex  md:justify-between">
                <Link to={'/home'}>
                    <h1 className="text-md font-bold text-gray-500">SHOP<span className="text-gray-500">Me!</span></h1>
                </Link>
                <span className="text-sm text-gray-500 sm:text-center place-content-center">© 2024 <Link to={'/home'} className="hover:underline">ShopMe!</Link>. All Rights Reserved@Prasad.
            </span>
            </div>
        </footer>
    )
}

export default Footer;