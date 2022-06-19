import { createSelector } from "@reduxjs/toolkit";
import { Selector } from "react-redux";
import { FilterData, FilterState } from "../types/filter";
import { GlobalState } from "../types/global";

export const getIsFilterMenuExpandedSelector = (state: GlobalState) =>
    state.filter.ui?.isFilterMenuExpanded;

export const getAllFilterByCategoriesOptionsSelector: Selector<GlobalState, string[] | undefined> = (state: GlobalState) =>
    state.filter.filterOptions.allCategoriesFromProducts;

export const getAllFilterByBrandsOptionsSelector: Selector<GlobalState, string[] | undefined> = (state: GlobalState) =>
    state.filter.filterOptions.allBrandsFromProducts;

export const getAllFilterByModelsOptionsSelector: Selector<GlobalState, string[] | undefined> = (state: GlobalState) =>
    state.filter.filterOptions.allModelsFromProducts;

export const getAllFilterByVariantsOptionsSelector: Selector<GlobalState, string[] | undefined> = (state: GlobalState) =>
    state.filter.filterOptions.allVariantsFromProducts;

export const getSelectedFilterByCategorySelector: Selector<GlobalState, FilterState> = (state: GlobalState) =>
    state.filter;

export const getSelectedCategory: Selector<GlobalState, string[]> = (state: GlobalState) =>
    state.filter.filterOptions.selectedCategory;

export const getSelectedBrand: Selector<GlobalState, string[]> = (state: GlobalState) =>
    state.filter.filterOptions.selectedBrand;


export const getSelectedModel: Selector<GlobalState, string[]> = (state: GlobalState) =>
    state.filter.filterOptions.selectedModel;

export const getSelectedVariant: Selector<GlobalState, string[]> = (state: GlobalState) =>
    state.filter.filterOptions.selectedVariant;  