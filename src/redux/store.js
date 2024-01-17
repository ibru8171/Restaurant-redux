import { configureStore } from "@reduxjs/toolkit";
import restuarentSlice from "./restuarentSlice";

const store = configureStore({
    reducer: {
        restuarentSlice:restuarentSlice
    }
})
export default store;
