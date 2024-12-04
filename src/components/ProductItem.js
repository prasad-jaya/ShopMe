import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";

import { FaCartShopping } from "react-icons/fa6";
import { createSelector } from "@reduxjs/toolkit";

const memoizedProducts = createSelector(
    [(state) => state.products.data, (state) => state.products.searchTerm],
    (data, searchTerm) =>{
        return data.filter((product) =>{
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
)

const ProductItem = () =>{
    const dispatch = useDispatch();

    const products = useSelector(memoizedProducts); 
    
    const handleAddtoCart = (product) =>{
        dispatch(addToCart(product));
    }
    const renderProducts = products.map((product) => {
        return (
            <div key={product.id} className="bg-slate-0 rounded-[18px] border-2 border-grey-600 ">
                <img src={product.image} alt={product.name} className="rounded-t-[15px] w-full" />
                <div className="grid grid-cols-3 justify-between px-3 pb-4">
                    <div className="col-span-2 py-2">
                        <p className="text-sm font-bold text-gray-600 pb-2 w-[18ch] truncate">{product.name}</p>
                        <p className="text-sm  text-gray-500 truncate w-[20ch]">{product.description}</p>
                    </div>
                    <div className="flex flex-col items-end py-2 ">
                        <p className="text-md text-gray-600 font-bold pb-2">${product.price}</p>
                        <FaCartShopping onClick={() => handleAddtoCart(product)} className="text-md cursor-pointer text-gray-500 hover:text-gray-950"/>
                    </div>
                </div>
            </div>
        )
    });
    return renderProducts;
}

export default ProductItem;