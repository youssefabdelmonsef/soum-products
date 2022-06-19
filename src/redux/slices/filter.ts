import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../types/filter";
import { GlobalState } from "../types/global";

const initialState: FilterState | GlobalState = {
    filterOptions: {
        allCategoriesFromProducts: undefined,
        allBrandsFromProducts: undefined,
        allModelsFromProducts: undefined,
        allVariantsFromProducts: undefined
    },
    ui: {}
} as FilterState;

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        expandFilterMenu(state, action: { payload: { isFilterMenuExpanded: boolean } }) {
            state.ui.isFilterMenuExpanded = action.payload.isFilterMenuExpanded;
        },
        setAllFilterByCategoriesOptions(state, action: { payload: { categories: string[] } }) {
            state.filterOptions.allCategoriesFromProducts = [...action.payload.categories];
        },
        setAllFilterByBrandsOptions(state, action: { payload: { brands: string[] } }) {
            state.filterOptions.allBrandsFromProducts = [...action.payload.brands];
        },
        setAllFilterByModelsOptions(state, action: { payload: { models: string[] } }) {
            state.filterOptions.allModelsFromProducts = [...action.payload.models];
        },
        setAllFilterByVariantsOptions(state, action: { payload: { variants: string[] } }) {
            state.filterOptions.allVariantsFromProducts = [...action.payload.variants];
        },
        addCategoryToSelectedCategoryArr(state, action: { payload: { category: string } }) {
            state.filterOptions.selectedCategory = [
                ...state.filterOptions.selectedCategory || [],
                action.payload.category
            ];
        },
        removeCategoryFromSelectedCategoryArr(state, action: { payload: { category: string } }) {
            state.filterOptions.selectedCategory = state.filterOptions.selectedCategory!.filter((category: string)=>category!==action.payload.category);
        },
        addBrandToSelectedBrandArr(state, action: { payload: { brand: string } }) {
            state.filterOptions.selectedBrand = [
                ...state.filterOptions.selectedBrand || [],
                action.payload.brand
            ];
        },
        removeBrandFromSelectedBrandArr(state, action: { payload: { brand: string } }) {
            state.filterOptions.selectedBrand = state.filterOptions.selectedBrand!.filter((brand: string)=>brand!==action.payload.brand);
        },
        addModelToSelectedModelArr(state, action: { payload: { model: string } }) {
            state.filterOptions.selectedModel = [
                ...state.filterOptions.selectedModel || [],
                action.payload.model
            ];
        },
        removeModelFromSelectedModelArr(state, action: { payload: { model: string } }) {
            state.filterOptions.selectedModel = state.filterOptions.selectedModel!.filter((model: string)=>model!==action.payload.model);
        },
        addVariantToSelectedVariantArr(state, action: { payload: { variant: string } }) {
            state.filterOptions.selectedVariant = [
                ...state.filterOptions.selectedVariant || [],
                action.payload.variant
            ];
        },
        removeVariantFromSelectedVariantArr(state, action: { payload: { variant: string } }) {
            state.filterOptions.selectedVariant = state.filterOptions.selectedVariant!.filter((variant: string)=>variant!==action.payload.variant);
        },
        deselectAllFilters(state) {
            state.filterOptions.selectedCategory = [];
            state.filterOptions.selectedBrand = [];
            state.filterOptions.selectedModel = [];
            state.filterOptions.selectedVariant = [];
        },
        /** clear selection */
        clearFilterByCategory(state) {
            state.filterOptions.selectedCategory = [];
        },
        clearFilterByBrand(state) {
            state.filterOptions.selectedBrand = [];
        },
        clearFilterByModel(state) {
            state.filterOptions.selectedModel = [];
        },
        clearFilterByVariant(state) {
            state.filterOptions.selectedVariant = [];
        }
    }
});

export const {
    expandFilterMenu,

    setAllFilterByCategoriesOptions,
    setAllFilterByBrandsOptions,
    setAllFilterByModelsOptions,
    setAllFilterByVariantsOptions,

    deselectAllFilters,

    clearFilterByCategory,
    clearFilterByBrand,
    clearFilterByModel,
    clearFilterByVariant,


    addCategoryToSelectedCategoryArr,
    removeCategoryFromSelectedCategoryArr,
    addBrandToSelectedBrandArr,
    removeBrandFromSelectedBrandArr,
    addModelToSelectedModelArr,
    removeModelFromSelectedModelArr,
    addVariantToSelectedVariantArr,
    removeVariantFromSelectedVariantArr,
    
} = filterSlice.actions;

export default filterSlice.reducer;