import { createSelector, createSlice, Selector } from "@reduxjs/toolkit";
import { GlobalState } from "../types/global";
import { Product, ProductsState } from "../types/products";

const initialState: ProductsState = {} as ProductsState

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addRawProductsToAllProducts(state, action: { payload: { products: Product[] } }) {
            state.allProducts = [...action.payload.products];
        },
        applyFilterToProducts(state, action: { payload: { categoryArr?: string[], brandArr?: string[], modelArr?: string[], variantArr?: string[] } }) {
            let filteredProducts: Product[] = [];
            state.allProducts?.forEach((product: Product) => {
                const foundInCategoryArr = action.payload.categoryArr && action.payload.categoryArr.length > 0 ? action.payload.categoryArr?.includes(product.category) : true;
                const foundInBrandArr = action.payload.brandArr && action.payload.brandArr!.length > 0 ? action.payload.brandArr?.includes(product.brand) : true;
                const foundInModelArr = action.payload.modelArr && action.payload.modelArr!.length > 0 ? action.payload.modelArr?.includes(product.model) : true;
                const foundInVariantArr = action.payload.variantArr && action.payload.variantArr!.length > 0 ? action.payload.variantArr?.includes(product.variant) : true;
                if (foundInCategoryArr && foundInBrandArr  && foundInModelArr && foundInVariantArr) {
                    filteredProducts.push(product);
                }
            })
            state.filteredProducts = [...filteredProducts];
        }
    }
});


export const { addRawProductsToAllProducts, applyFilterToProducts } = productsSlice.actions;
export default productsSlice.reducer;