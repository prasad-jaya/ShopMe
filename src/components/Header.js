import { Link, useLocation } from "react-router";
import { IoLogOut } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSignedIn, setUser } from "../store";
import ProductSearch from "./ProductSearch";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleLogout = () =>{
        dispatch(setSignedIn(false));
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };
    return(
        <header className="bg-white rounded-lg shadow md:flex justify-between p-4 grid grid-cols-2">
            <Link to={'/home'}>
                <h1 className="text-2xl font-bold text-gray-950">SHOP<span className="text-gray-500">Me!</span></h1>
            </Link>

            <div className="md:hidden place-items-center flex place-content-end gap-3">
                <IoLogOut onClick={handleLogout} className="text-3xl cursor-pointer text-gray-500 hover:text-gray-950"/>

                {isMobileMenuOpen ? (
                    <HiOutlineX 
                         onClick={toggleMobileMenu} 
                        className="text-3xl cursor-pointer text-gray-500"
                    />
                ) : (
                    <HiOutlineMenu 
                         onClick={toggleMobileMenu} 
                        className="text-3xl cursor-pointer text-gray-500"
                    />
                )}
            </div>

            <div className={`md:flex  gap-4 hidden`}>
                <Link className={`${location.pathname === '/home' ? 'text-gray-800 font-bold' : 'text-gray-500 hover:text-gray-950'} text-lg`} to={'/home'}>Home</Link>
                <Link className={`${location.pathname === '/cart' ? 'text-gray-800 font-bold' : 'text-gray-500 hover:text-gray-950'} text-lg`} to={'/cart'}>Cart</Link>
            </div>
            <div className={`md:flex gap-6 justify-between place-items-center  hidden`}>
                <ProductSearch/>
                <IoLogOut onClick={handleLogout} className="text-3xl cursor-pointer text-gray-500 hover:text-gray-950"/>
            </div>

            {isMobileMenuOpen && (
                <div className="col-span-2 my-4">
                     <ul className="flex flex-col my-4 font-medium">
                        <li>
                            <Link to={'/home'} className={`block py-2 pr-4 pl-3 border-b rounded bg-primary-700 ${location.pathname === '/home' ? 'text-gray-800 font-bold' : 'text-gray-500 hover:text-gray-950'}`} >Home</Link>
                        </li>
                        <li>
                            <Link to={'/cart'} className={`block py-2 pr-4 pl-3 border-b rounded bg-primary-700 ${location.pathname === '/cart' ? 'text-gray-800 font-bold' : 'text-gray-500 hover:text-gray-950'}`} >Cart</Link>
                        </li>
                    </ul>
                    <ProductSearch />
                </div>
            )}
        </header>
    )
}

export default Header;