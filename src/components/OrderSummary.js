import { useSelector } from "react-redux";

const OrderSummary = () =>{

    const totalCost = useSelector(({cart : {data}}) =>{
        return data.reduce((acc, item) => {
            return acc + item.price * item.quantity
        },0);
    });

    return(
        <div className="border-2 border-grey-600 rounded-[8px] p-6">
            <h2 className="text-2xl font-bold"> Order Summary </h2>
            <p className="text-gray-400 text-sm">Total Price</p>
            <hr className="my-6"/>
            <div className="flex justify-between">
                <h3 className="text-lg font-bold"> Order Total: </h3>
                <h3 className="text-lg font-extrabold"> ${totalCost} </h3>
            </div>
            <button type="submit"  className="flex w-full justify-center rounded-md bg-gray-950 px-3 py-2 mt-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500  ">Place Order</button>

        </div>
    )
}

export default OrderSummary;