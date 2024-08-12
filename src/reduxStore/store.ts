import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slices/customerSlice";
import { useDispatch } from "react-redux";

const store=configureStore({
    reducer:{
        customerDetail: customerSlice
    }
})
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = ()=>useDispatch<AppDispatch>()

export default store