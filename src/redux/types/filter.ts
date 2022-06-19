export interface FilterData {
    name: string;
    selected: boolean;
}
export interface FilterOptions {
    allCategoriesFromProducts?: string[] | undefined; 
    allBrandsFromProducts?: string[] | undefined; 
    allModelsFromProducts?: string[] | undefined; 
    allVariantsFromProducts?: string[] | undefined; 
    selectedCategory: string[];
    selectedBrand: string[];
    selectedModel: string[];
    selectedVariant: string[];
}

export interface FilterState {
    filterOptions: FilterOptions,
    ui: {
        isFilterMenuExpanded: boolean;
    }
}
