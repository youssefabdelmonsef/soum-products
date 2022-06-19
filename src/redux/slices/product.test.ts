import { addRawProductsToAllProducts, applyFilterToProducts } from "../slices/product";
import { store } from "../store";
import { Product } from "../types/products";

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

  describe("product slice", () => {
    it("should add products and filter (with category) with actions: addRawProductsToAllProducts and applyFilterToProducts", () => {
      selectorTest.dispatch(addRawProductsToAllProducts({ products: [...dummyProducts] }));
      selectorTest.dispatch(applyFilterToProducts({ categoryArr: ['category2'] }));
      expect(
        selectorTest.getState().products.filteredProducts
      ).toEqual([dummyProducts[1]]);
    });

    it("should add products and filter (with brand) with actions: addRawProductsToAllProducts and applyFilterToProducts", () => {
      selectorTest.dispatch(addRawProductsToAllProducts({ products: [...dummyProducts] }));
      selectorTest.dispatch(applyFilterToProducts({ brandArr: ['brand1'] }));
      expect(
        selectorTest.getState().products.filteredProducts
      ).toEqual([dummyProducts[0]]);
    });

    it("should add products and filter (with model) with actions: addRawProductsToAllProducts and applyFilterToProducts", () => {
      selectorTest.dispatch(addRawProductsToAllProducts({ products: [...dummyProducts] }));
      selectorTest.dispatch(applyFilterToProducts({ modelArr: ['model2'] }));
      expect(
        selectorTest.getState().products.filteredProducts
      ).toEqual([dummyProducts[1]]);
    });

    it("should add products and filter (with variant) with actions: addRawProductsToAllProducts and applyFilterToProducts", () => {
      selectorTest.dispatch(addRawProductsToAllProducts({ products: [...dummyProducts] }));
      selectorTest.dispatch(applyFilterToProducts({ variantArr: ['variant1'] }));
      expect(
        selectorTest.getState().products.filteredProducts
      ).toEqual([dummyProducts[0]]);
    });

  });

});
