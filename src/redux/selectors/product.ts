import { createSelector, Selector } from "@reduxjs/toolkit";
import { GlobalState } from "../types/global";
import { Product } from "../types/products";

export const getAllProductsSelector: Selector<
  GlobalState,
  Product[]
> = (state: GlobalState) => state.products.allProducts;
export const getfilteredProductsSelector = (state: GlobalState) => state.products.filteredProducts || [];


export const getProductsToShowSelector: Selector<
  GlobalState,
  Product[]
> = createSelector(
  getAllProductsSelector,
  getfilteredProductsSelector,
  (
    allProducts: Product[],
    filteredProducts: Product[]
  ) => {
    return filteredProducts && filteredProducts.length > 0 ? filteredProducts : allProducts;
  }
);

export const errorFetchingProductsSelector: Selector<GlobalState, boolean> = (state: GlobalState): boolean => state.products.errorFetchingProducts || false;


