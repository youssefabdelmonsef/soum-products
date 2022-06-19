import { FilterState } from "./filter";
import { LanguageState } from "./language";
import { ProductsState } from "./products";

// export type GlobalAction = HobbiesActions;
export type GlobalState = Readonly<{
  products: ProductsState;
  filter: FilterState;
  language: LanguageState;
}>;