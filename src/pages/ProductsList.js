import ProductItem from "../components/ProductItem";
import b1 from "../assets//images/b1.jpg";

const ProductsList = () =>{

    return (
        <>
            <img src={b1} alt="SHOPme"/>
            <h1 className="text-3xl font-extrabold text-center m-8">Recommend Products</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
                <ProductItem/>
            </div>
        </>
      
    )
}

export default ProductsList;