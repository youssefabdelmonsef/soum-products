import '../../../styles/styles.css';
import './button.css';
import { ReactElement } from "react";
import styled from 'styled-components';
import { ButtonProps } from './button.types';

const ButtonContainer = styled.button`
    width: calc(50% - 15px);
    float: left;
    height: 50px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    font-family: DIN Next LT Arabic,sans-serif!important;
    cursor: pointer;
    margin: 5px;
    @media only screen and (min-width: 1025px) {
        width: 200px;
        margin: 15px;
    }
    &:active {
        box-shadow: inset 1px 2px 5px #777;
        transform: translateY(1px);
    }
`;

export function ButtonComponent(
    props: ButtonProps
): ReactElement | null {
    return (
        <ButtonContainer className={`button-container__${props.type}`} onClick={()=>props.onClick()}>
            {props.text}
        </ButtonContainer>
    );

}
