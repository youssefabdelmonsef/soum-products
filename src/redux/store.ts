import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./slices/filter";
import { productsSlice } from "./slices/product";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        filter: filterSlice.reducer
    }
});