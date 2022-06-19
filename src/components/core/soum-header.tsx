import '../../styles/styles.css';
import './soum-header.css';
import { ReactElement } from "react";
import styled from 'styled-components';
import { IMAGES } from "../../constants/images";
import { EXTERNAL_URLS } from "../../constants/urls";

const SoumHeaderContainer = styled.div`
    background: rgb(16,1,67);
    padding: 15px;
    padding-bottom: 0px;
    height: 135px;
    position: relative;
    color: white;
    @media only screen and (min-width: 1025px) {
        padding: 20px;
        padding-bottom: 0px;
        height: 150px;
    }
`;

const UpperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
`;

const LogoImage = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    @media only screen and (min-width: 1025px) {
        width: 30px;
        height: 30px;
        margin-right: 12px;
    }
`;

const LogoText = styled.div`
    display: inline-block;
    top: 0px;
    position: absolute;
    left: -52px;
    @media only screen and (min-width: 1025px) {
        top: 5px;
    }
`;

const LowerHeader = styled.div`
`;

export function SoumHeader(
    props: any
): ReactElement | null {
    return (<SoumHeaderContainer>
        <UpperHeader>
            <div>
                <LogoImage src={IMAGES.soum_logo} />
            </div>
            <div style={{"position": "relative" }}>
                <div className="soum-header__language">
                    <LogoText>English</LogoText>
                    <LogoImage src={IMAGES.languages_logo} />
                </div>
                <LogoImage className="cursor-pointer"
                    onClick={() => window.open(EXTERNAL_URLS.twitter, "_blank")}
                    src={IMAGES.twitter_logo} />
                <LogoImage className="cursor-pointer" style={{"margin": "0px"}}
                    onClick={() => window.open(EXTERNAL_URLS.instagram, "_blank")}
                    src={IMAGES.instagram_logo} />
            </div>
        </UpperHeader>
        <LowerHeader className="LowerHeader">
            <div className="lower-header__text">
                <div className="soum-header__lower-header__title">
                    Money Back Guarantee!
                </div>
                <div className="soum-header__lower-header__sub-title">
                    <div>Try it for 24hrs, and if it doesn’t </div>
                    <div>meet specifications, <strong>return it for free!</strong></div>
                </div>
                <div>

                </div>
            </div>
            <div className="soum-header__lower-header__men-logo">
                <img src={IMAGES.men_logo} className="soum-header__lower-header__men-logo-img"/>
            </div>
        </LowerHeader>
    </SoumHeaderContainer>);

}
