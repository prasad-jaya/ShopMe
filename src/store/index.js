import { configureStore } from "@reduxjs/toolkit";
import { addToCart, cartReducer, removeItem, incrementQuntity, decrementQuntity } from "./slices/cartSlice";
import { setSignedIn } from "./slices/userSlice";
import { userReducer, setUser } from "./slices/userSlice";
import { productReducer, changeSearchTerm } from "./slices/productSlice";
 
 const store = configureStore({
    reducer:{
        products: productReducer,
        cart: cartReducer,
        user: userReducer
    },
 });

 export { store, addToCart, removeItem, incrementQuntity, decrementQuntity, setSignedIn, setUser, changeSearchTerm}