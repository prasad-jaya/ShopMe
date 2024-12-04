import { useDispatch } from "react-redux"
import { decrementQuntity, incrementQuntity, removeItem } from "../store";
import { FaTrash } from "react-icons/fa";

const CartItem = ({cartItem}) =>{

    const renderCartItem = cartItem.map((item) =>{
        const dispatch = useDispatch();

        const handleQuantityIncrement = (itemId) =>{
            dispatch(incrementQuntity(itemId));
        }
        const handleQuantityDecrement = (itemId) =>{
            dispatch(decrementQuntity(itemId));
        }
        const handleRemoveItem = (itemId) =>{
            dispatch(removeItem(itemId));
        }

        return(
            <div key={item.id} className="flex border-2 border-grey-600 rounded-[8px] ">
                <img src={item.image} alt={item.name} className="rounded-l-[7px] w-[100px]" />
                <div className="flex p-2 pb-4 pl-4 justify-between w-full">
                    <div className="grid">
                        <div>
                            <p className="text-md font-bold text-gray-600 ">{item.name}</p>
                            <p className="text-sm  text-gray-500">{item.description}</p>
                        </div>
                        <p className=" text-md text-gray-600 font-bold place-content-end">${item.price}</p>
                    </div>
                    <div className="grid place-items-end">
                        <div className="flex place-items-center gap-4 p-2">
                            <div className="flex place-items-center border-solid border-2 border-grey-600 rounded-2xl  px-4">
                                <button onClick={() => handleQuantityDecrement(item.id)} className=" cursor-pointer font-bold text-lg cursor-pointer px-2"> - </button> 
                                <p className="font-bold text-md cursor-pointer ">{item.quantity}</p>
                                <button onClick={() => handleQuantityIncrement(item.id)} className=" cursor-pointer font-bold text-lg cursor-pointer px-2"> + </button> 
                            </div>
                            <FaTrash className="text-md cursor-pointer text-gray-500 hover:text-red-600" onClick={() => handleRemoveItem(item.id)}/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    })

    return(
        <>
        {renderCartItem}
        </>
    )

}
export default CartItem;