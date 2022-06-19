import { addRawProductsToAllProducts, applyFilterToProducts } from "../slices/product";
import { store } from "../store";
import { GlobalState } from "../types/global";
import { Product } from "../types/products";
import { getProductsToShowSelector } from "./product";

describe("The consumer customer data building owner checkbox selectors", () => {
    const selectorTest = store;


    const dummyProducts: Product[] = [{
        category: 'category1',
        brand: 'brand1',
        model: 'model1',
        variant: 'variant1',
        imgUrl: 'imgUrl1',
    },
    {
        category: 'category2',
        brand: 'brand2',
        model: 'model2',
        variant: 'variant2',
        imgUrl: 'imgUrl2',
    }]

    describe("product selector", () => {
        selectorTest.dispatch(addRawProductsToAllProducts({ products: [...dummyProducts] }));
        selectorTest.dispatch(applyFilterToProducts({ categoryArr: ['category2'] }));
        it("returns products filtered if matched with 'category2'", () => {
            expect(getProductsToShowSelector(selectorTest.getState() as GlobalState))
                .toEqual([dummyProducts[1]]);
        });

    });

});
