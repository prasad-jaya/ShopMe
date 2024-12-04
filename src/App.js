import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () =>{

    return (
        <>
            <RouterProvider router={router}/>
            <ToastContainer autoClose={2000} theme="dark"/>
        </>
    )
    
}

export default App;