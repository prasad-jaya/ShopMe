import { createBrowserRouter } from "react-router";
import App from "../App";
import ProductsList from "../pages/ProductsList";
import CartPage from "../pages/CartPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>,
    },
    {
        path:'/signup',
        element:<SignInPage/>,
    },
    {
        element:<PrivateRoute/>,
        children:[
            {
                path:'/home',
                element:<ProductsList/>
            },
            {
                path:'/cart',
                element:<CartPage/>
            }
        ]
    }
])