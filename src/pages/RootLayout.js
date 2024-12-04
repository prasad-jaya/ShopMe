import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () =>{
    return(
        <div className="w-md mx-auto container p-6">
            <Header/>
            <div className="py-10">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )

}

export default RootLayout;