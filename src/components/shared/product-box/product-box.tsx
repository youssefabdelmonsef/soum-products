import { ReactElement } from "react";
import styled from 'styled-components';

const ProductsBoxContainer = styled.div`
    box-shadow: 0 0 9px #bed6c366;
    background-color: #fff;
    padding: 10px 10px 15px;
    float: left;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 7px;
`;

export function ProductBoxComponent(
    props: any
): ReactElement | null {
    return (
        <div>ProductBoxComponent</div>
    );

}
