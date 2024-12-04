import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

const CartPage = () =>{
    const cartItem = useSelector((state) =>{
        return state.cart.data;
    })
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="gap-6 flex flex-col md:col-span-3">
                {cartItem.length > 0 ? <CartItem cartItem={cartItem}/> : <h1 className="font-bold text-3xl text-gray-300">Add items to Cart!</h1>}
            </div>
            <div className="">
                <OrderSummary/>
            </div>
        </div>
       
    )   
}

export default CartPage;