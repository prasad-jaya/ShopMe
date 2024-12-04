import { useSelector } from "react-redux";
import RootLayout from "../pages/RootLayout";
import { Navigate } from "react-router";

const PrivateRoute = () =>{
    const isSignedIn = useSelector((state) =>{
        return state.user.isSignedIn;
    });
    return isSignedIn ? <RootLayout/> : <Navigate to={'/'}/>;
}
export default PrivateRoute;