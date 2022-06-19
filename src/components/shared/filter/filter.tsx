import '../../../styles/styles.css';
import './filter.css';
import { ReactElement, useEffect } from "react";
import styled from 'styled-components';
import { IMAGES } from "../../../constants/images";
import { ButtonComponent } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/types/global';
import {
    addBrandToSelectedBrandArr,
    addCategoryToSelectedCategoryArr,
    addModelToSelectedModelArr,
    addVariantToSelectedVariantArr,
    clearFilterByBrand,
    clearFilterByCategory,
    clearFilterByModel,
    clearFilterByVariant,
    deselectAllFilters,
    expandFilterMenu,
    removeBrandFromSelectedBrandArr,
    removeCategoryFromSelectedCategoryArr,
    removeModelFromSelectedModelArr,
    removeVariantFromSelectedVariantArr
} from '../../../redux/slices/filter';
import { getAllFilterByBrandsOptionsSelector, getAllFilterByCategoriesOptionsSelector, getAllFilterByModelsOptionsSelector, getAllFilterByVariantsOptionsSelector, getIsFilterMenuExpandedSelector, getSelectedBrand, getSelectedCategory, getSelectedModel, getSelectedVariant } from '../../../redux/selectors/filter';
import { applyFilterToProducts } from '../../../redux/slices/product';
import { getfilteredProductsSelector } from '../../../redux/selectors/product';
import { Product } from '../../../redux/types/products';

const FilterContainer = styled.div`
    background-color: #f2f5f8;
    width: calc(100vw - 80px);
    display: block;
`;

const FilterButton = styled.div`
    width: 100px;
    height: 33px;
    box-shadow: 0 0 9px #bed6c366;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: #177ae2!important;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    padding: 6px 10px;
    margin-bottom: 15px;
`;

const FilterMenu = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 5px;
    padding: 20px;
`;

const OptionButton = styled.span`
    border: 1px solid #cfd3d6;
    background-color: #fff;
    padding: 6px 14px;
    border-radius: 60px;
    margin-right: 6px;
    color: #363636;
    font-size: 12px;
    margin-bottom: 12px;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: #177ae2;
        border: 1px solid #177ae2;
    }
    &.selected {
        background: #01B9FF;
        color: white;
    }
`;

export function FilterComponent(
    props: any
): ReactElement | null {
    const dispatch = useDispatch();
    const isExpanded = useSelector((state: GlobalState) => getIsFilterMenuExpandedSelector(state));
    const allCategoriesFilterOptions = useSelector((state: GlobalState) => getAllFilterByCategoriesOptionsSelector(state));
    const allBrandsFilterOptions = useSelector((state: GlobalState) => getAllFilterByBrandsOptionsSelector(state));
    const allModelsFilterOptions = useSelector((state: GlobalState) => getAllFilterByModelsOptionsSelector(state));
    const allVariantsFilterOptions = useSelector((state: GlobalState) => getAllFilterByVariantsOptionsSelector(state));

    const selectedCategory = useSelector((state: GlobalState) => getSelectedCategory(state));
    const selectedBrand = useSelector((state: GlobalState) => getSelectedBrand(state));
    const selectedModel = useSelector((state: GlobalState) => getSelectedModel(state));
    const selectedVariant = useSelector((state: GlobalState) => getSelectedVariant(state));

    const filteredProducts = useSelector((state: GlobalState) => getfilteredProductsSelector(state));
    const findInProducts = (findBy: 'category' | 'brand' | 'model' | 'variant', findValue: string, products: Product[]): boolean => {
        let found = false;
        products.length > 0 ? products?.map((product: Product) => {
            findValue === product[findBy] && (found = true);
        }) : found = true;
        return found;
    }

    useEffect(() => {
        dispatch(applyFilterToProducts({ categoryArr: selectedCategory, brandArr: selectedBrand, modelArr: selectedModel, variantArr: selectedVariant }));
    }, [selectedCategory, selectedBrand, selectedModel, selectedVariant]);


    return (
        <FilterContainer>
            <FilterButton onClick={() => dispatch(expandFilterMenu({ isFilterMenuExpanded: !isExpanded }))}>
                <img src={IMAGES.filter_icon} />
                <div className="filter-container__filter-button__text">Filter</div>
                {isExpanded ? <img src={IMAGES.arrow_up} /> : <img src={IMAGES.arrow_down} />}
            </FilterButton>
            {isExpanded && <FilterMenu>
                <div className="filter-container__filter-menu__header">
                    <img className="filter-container__filter-menu__back-icon" src={IMAGES.back_icon} onClick={() => dispatch(expandFilterMenu({ isFilterMenuExpanded: false }))} />
                    <div className="filter-container__filter-menu__title">Filter</div>
                </div>

                <div className="separator"></div>

                <div className="filter-container__filter-sub-menu-container">
                    <div className="filter-container__filter-sub-menu-header">
                        <div className="filter-container__filter-menu__subtitle-title">Product Category</div>
                        <div className="filter-container__filter-menu__clear" onClick={() => dispatch(clearFilterByCategory())}>Clear</div>
                    </div>
                    <div className="filter-container__filter-sub-menu-body">
                        {allCategoriesFilterOptions && allCategoriesFilterOptions.map((category: string, index: number) => {
                            return <OptionButton key={index}
                                className={`${selectedCategory?.includes(category) && 'selected'}`}
                                onClick={() => {
                                    if (selectedCategory?.includes(category)) {
                                        dispatch(removeCategoryFromSelectedCategoryArr({ category: category }));
                                    }
                                    else {
                                        dispatch(addCategoryToSelectedCategoryArr({ category: category }));
                                    }
                                }}>{category}</OptionButton>
                        })}
                    </div>
                </div>

                <div className="separator"></div>

                <div className="filter-container__filter-sub-menu-container">
                    <div className="filter-container__filter-sub-menu-header">
                        <div className="filter-container__filter-menu__subtitle-title">Brand</div>
                        <div className="filter-container__filter-menu__clear" onClick={() => dispatch(clearFilterByBrand())}>Clear</div>
                    </div>
                    <div className="filter-container__filter-sub-menu-body">
                        {allBrandsFilterOptions && allBrandsFilterOptions.map((brand: string, index: number) => {
                            return <OptionButton key={index} className={`${selectedBrand?.includes(brand) && 'selected'} ${!findInProducts('brand', brand, filteredProducts) && 'disabled'}`}
                                onClick={() => {
                                    if (selectedBrand?.includes(brand)) {
                                        dispatch(removeBrandFromSelectedBrandArr({ brand }));
                                    }
                                    else {
                                        dispatch(addBrandToSelectedBrandArr({ brand }));
                                    }
                                }}>{brand}</OptionButton>
                        })}
                    </div>
                </div>

                <div className="separator"></div>

                <div className="filter-container__filter-sub-menu-container">
                    <div className="filter-container__filter-sub-menu-header">
                        <div className="filter-container__filter-menu__subtitle-title">Model</div>
                        <div className="filter-container__filter-menu__clear" onClick={() => dispatch(clearFilterByModel())}>Clear</div>
                    </div>
                    <div className="filter-container__filter-sub-menu-body">
                        {allModelsFilterOptions && allModelsFilterOptions.map((model: string, index: number) => {
                            return <OptionButton key={index} className={`${selectedModel?.includes(model) && 'selected'} ${!findInProducts('model', model, filteredProducts) && 'disabled'}`}
                                onClick={() => {
                                    if (selectedModel?.includes(model)) {
                                        dispatch(removeModelFromSelectedModelArr({ model }));
                                    }
                                    else {
                                        dispatch(addModelToSelectedModelArr({ model }));
                                    }
                                }}>{model}</OptionButton>
                        })}
                    </div>
                </div>

                <div className="separator"></div>

                <div className="filter-container__filter-sub-menu-container">
                    <div className="filter-container__filter-sub-menu-header">
                        <div className="filter-container__filter-menu__subtitle-title">Variant</div>
                        <div className="filter-container__filter-menu__clear" onClick={() => dispatch(clearFilterByVariant())}>Clear</div>
                    </div>
                    <div className="filter-container__filter-sub-menu-body">
                        {allVariantsFilterOptions && allVariantsFilterOptions.map((variant: string, index: number) => {
                            return <OptionButton key={index} className={`${selectedVariant?.includes(variant) && 'selected'} ${!findInProducts('variant', variant, filteredProducts) && 'disabled'}`}
                                onClick={() => {
                                    if (selectedVariant?.includes(variant)) {
                                        dispatch(removeVariantFromSelectedVariantArr({ variant }));
                                    }
                                    else {
                                        dispatch(addVariantToSelectedVariantArr({ variant }));
                                    }
                                }}>{variant}</OptionButton>
                        })}

                    </div>
                </div>
                <div className="filter-container__action-buttons">
                    <ButtonComponent type='secondary' text='Clear All' onClick={() => dispatch(deselectAllFilters())} />
                    <ButtonComponent type='primary' text={
                        `Apply`
                        + `${filteredProducts.length > 0 ? '(' : ''}`
                        + `${filteredProducts.length > 0 ? filteredProducts.length : ''}`
                        + `${filteredProducts.length > 0 ? ')' : ''}`
                    } onClick={() => {
                        dispatch(expandFilterMenu({ isFilterMenuExpanded: false }));
                    }} />
                </div>
            </FilterMenu>}
        </FilterContainer>
    );

}
