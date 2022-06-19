import './product.css';
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { API_ENDPOINTS } from "../../constants/api-endpoints";
import { getProductsToShowSelector } from "../../redux/selectors/product";
import { setAllFilterByBrandsOptions, setAllFilterByCategoriesOptions, setAllFilterByModelsOptions, setAllFilterByVariantsOptions } from "../../redux/slices/filter";
import { addRawProductsToAllProducts } from "../../redux/slices/product";
import { GlobalState } from "../../redux/types/global";
import { Product } from "../../redux/types/products";
import { getIsFilterMenuExpandedSelector } from '../../redux/selectors/filter';
import { IMAGES } from '../../constants/images';

const apiRequest = (): any => {
    return fetch(API_ENDPOINTS.PRODUCTS)
        .then(res => {
            return res.json();
        })
        .then((data: any) => {
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}

export const prepareFilterOptions = (products: Product[], filterType: 'category' | 'brand' | 'model' | 'variant'): string[] => {
    let types: string[] = [];
    products.forEach((product: Product) => {
        if (product[filterType] && !types.includes(product[filterType])) {
            types = [...types, product[filterType]];
        }
    });

    return types;
}

const ProductsContainer = styled.div`
    box-shadow: 0 0 9px #bed6c366;
    background-color: #f2f5f8;
    padding: 10px 10px 15px;
    float: left;
    border-radius: 5px;
    margin-bottom: 7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ProductBox = styled.div`
    width: 120px;
    height: 190px;
    background: white;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media only screen and (min-width: 1025px) {
        width: 170px;
    }
`;

export function ProductsComponent(
    props: any
): ReactElement | null {
    const dispatch = useDispatch();
    const filterExpanded = useSelector((state: GlobalState) => getIsFilterMenuExpandedSelector(state));
    const productsToShow: Product[] = useSelector((state: GlobalState) => getProductsToShowSelector(state));

    useEffect(() => {
        let rawProducts: Product[] = [];
        const fetchData = async () => {
            rawProducts = await apiRequest();
            dispatch(addRawProductsToAllProducts({ products: rawProducts }));
            dispatch(setAllFilterByCategoriesOptions({ categories: prepareFilterOptions(rawProducts, 'category') }));
            dispatch(setAllFilterByBrandsOptions({ brands: prepareFilterOptions(rawProducts, 'brand') }));
            dispatch(setAllFilterByModelsOptions({ models: prepareFilterOptions(rawProducts, 'model') }));
            dispatch(setAllFilterByVariantsOptions({ variants: prepareFilterOptions(rawProducts, 'variant') }));
        }
        fetchData();
    }, []);

    return (
        <>{!filterExpanded && productsToShow?.length > 0 &&
                <ProductsContainer className="products-container">
                    {productsToShow?.map((product: Product, index: number) => {
                        return <ProductBox key={index} className="product-box">
                            <img src={product.imgUrl || IMAGES.no_image_available} className="products-container__product-box__img" />
                            <div className="products-container__product-box__model">{product.model}</div>
                        </ProductBox>
                    })}
                </ProductsContainer>
            }
        </>
    );

}


