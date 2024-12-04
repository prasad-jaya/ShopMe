import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import p1 from "../../assets/images/p1.webp";
import p2 from "../../assets/images/p2.webp";
import p3 from "../../assets/images/p3.webp";
import p4 from "../../assets/images/p4.webp";
import p5 from "../../assets/images/p5.webp";
import p6 from "../../assets/images/p6.webp";
import p7 from "../../assets/images/p7.webp";
import p8 from "../../assets/images/p8.webp";

const PRODUCT_LIST = [
    {
        name:'BV Puffer Jacket',
        price: 50,
        description: 'Calvin Klein',
        image: p1,
        id: nanoid(),
    },
    {
        name:'Solid Rib-knit Crop Tank Top',
        price: 80,
        description: 'Women Fashion T-Shirt',
        image: p2,
        id: nanoid()
    },
    {
        name:'EMERY ROSE',
        price: 110,
        description: 'Women Clothing Winter',
        image: p3,
        id: nanoid()
    },
    {
        name:'Cottnline Women Straight-Leg',
        price: 50,
        description: 'Jeans With Pockets ',
        image: p4,
        id: nanoid(),
    },
    {
        name:'Raffinéa Cable Knit',
        price: 80,
        description: 'Raffinéa Cable Knit Sweater Dress',
        image: p5,
        id: nanoid()
    },
    {
        name:'EZwear Heart',
        price: 110,
        description: 'EZwear Heart Print Thermal Lined Drawstring Hoodie',
        image: p6,
        id: nanoid()
    },

    {
        name:'Essnce Casual Off Shoulder',
        price: 28,
        description: 'Casual Off Shoulder Solid Color Long Sleeve Sweater,Off The Shoulder Sweater',
        image: p7,
        id: nanoid()
    },
    {
        name:'PETITE Solid High Waist ',
        price: 8.54,
        description: 'Solid High Waist Bodycon Black Leggings',
        image: p8,
        id: nanoid()
    },
];

const productSlice = createSlice({
    name:'product',
    initialState:{
        searchTerm: '',
        data: PRODUCT_LIST,
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        }
    }
})

export const { changeSearchTerm } = productSlice.actions;
export const productReducer = productSlice.reducer;