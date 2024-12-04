import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { setSignedIn } from "./userSlice";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
       data: JSON.parse(localStorage.getItem('data')) || []
    },
    reducers:{
        addToCart(state, action){
            const exisit = state.data.find((item) => item.id === action.payload.id);
            if(exisit){
                toast.warn("Already exits this item!");
            }else{
                state.data.push({
                    name: action.payload.name,
                    price: action.payload.price,
                    description: action.payload.description,
                    image: action.payload.image,
                    id: action.payload.id,
                    quantity : 1
                })
                localStorage.setItem("data", JSON.stringify(state.data));
                toast.success(`Added to cart ${action.payload.name}`);
            } 
        },
        removeItem(state, action){
            const updated =  state.data.filter((product) => {
                return product.id !== action.payload
            });
            state.data = updated;
            localStorage.setItem("data", JSON.stringify(state.data));
            toast.info("Removed from cart!")
        },
        incrementQuntity(state, action){
            const item = state.data.find((item) => item.id === action.payload);
            item && (item.quantity += 1);
            localStorage.setItem("data", JSON.stringify(state.data));
        },
        decrementQuntity(state, action){
            const item = state.data.find((item) => item.id === action.payload);
            item && item.quantity > 0 && (item.quantity -= 1);
            localStorage.setItem("data", JSON.stringify(state.data));
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(setSignedIn, (state, action) =>{
            if(!action.payload){
                localStorage.setItem("data", null);  
                state.data = [];
            }
        })
    }
});

export const { addToCart, removeItem, incrementQuntity, decrementQuntity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;