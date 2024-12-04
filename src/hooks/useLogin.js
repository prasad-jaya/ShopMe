import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSignedIn, setUser } from "../store";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useLogin = () =>{
    const [response, setResponse] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSubmit = (data) => {
        const USERNAME = JSON.parse(localStorage.getItem('email')) || 'user@mail.com';
        const PASSWORD = JSON.parse(localStorage.getItem('password')) || 'user';

        if(data.email === USERNAME && data.password === PASSWORD){
            dispatch(setSignedIn(true));
            dispatch(setUser(data));
            toast.success(`Welcome ${data.email}`);
            setResponse({
                type:'success',
                message:'Login Success'
            });
            navigate('/home');
        }
        else{
            dispatch(setSignedIn(false));
            toast.error("Error Login!");
            setResponse({
                type:'fail',
                message:'Login Failed'
            })
        }
    };

    const signInSubmit = (data) => {
         dispatch(setUser(data));
         toast.success(`Success ${data.email}`);
         setResponse({
             type:'success',
             message:'Login Success'
         });
         navigate('/');      
     };

    return {response, loginSubmit, signInSubmit};
}

export default useLogin;