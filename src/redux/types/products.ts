export interface Product {
    category: string;
    brand: string;
    model: string;
    variant: string;
    imgUrl?: string;
};

export interface ProductsState {
    allProducts: Product[],
    filteredProducts: Product[]
    errorFetchingProducts: boolean;
};
