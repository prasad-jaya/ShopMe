import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const ProductSearch = () =>{
    const dispatch = useDispatch();

    const searchTerm = useSelector((state =>{
        return state.products.searchTerm
    }))
    const handleSearchTermChange = (event) =>{
        dispatch(changeSearchTerm(event.target.value))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(changeSearchTerm(searchTerm));
    }
    return (
        <>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="relative w-full">
                        <input value={searchTerm} onChange={handleSearchTermChange} type="search" id="search-dropdown" className="p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  focus-visible:outline-none border border-gray-300 " placeholder="Search Products..."  />
                        <button type="submit" className="absolute top-0 end-0 p-1.5 text-sm font-medium h-full text-white bg-gray-950 rounded-e-lg border border-gray-700 hover:bg-gray-500  ">
                           <IoSearchOutline className="text-lg"/>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProductSearch;