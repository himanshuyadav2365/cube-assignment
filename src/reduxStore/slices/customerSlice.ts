import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/data";

type CustomerSlice={
    allCustomer:Customer[],
    selectedCustomer:Customer
}


export type Customer={
    id:number,
    customerName:string,
    description:string
}

export const initialState:CustomerSlice={
    allCustomer:data,
    selectedCustomer:{
        id: data[0].id,
        customerName:data[0].customerName,
        description:data[0].description,
    }
}

const customerSlice=createSlice({
    name:"customer",
    initialState,
    reducers:{
        displayCustomer:(state,action)=>{
            console.log(action.payload)
            return {...state,selectedCustomer:{...action.payload}}
        }
    }
})

export default customerSlice.reducer
export const {displayCustomer}=customerSlice.actions

export const getSelectedCustomer = (state: { customerDetail:CustomerSlice} ) => state.customerDetail.selectedCustomer