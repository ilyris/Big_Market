import React from 'react';
import S from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <FooterContainer>
            <InnerFooterContainer>
                <FooterInformation>
                    <Content left={true}>
                        <NormalLink href="tel:6084734121">(608) 473-4121</NormalLink><Divider> | </Divider><FooterLink to="/contact">Contact Us</FooterLink>
                    </Content>
                    <Content>
                        <NormalLink href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></NormalLink>
                    </Content>
                    <Content left={true}>
                        <CopyrightText left={true}>© Copyright 2020 - Capitol Contracting. - All Rights Reserved</CopyrightText>    
                    </Content>
                    <Content>
                        <CopyrightText>Site Designed & Developed by Dylan Sieren</CopyrightText>
                    </Content>
                </FooterInformation>
            </InnerFooterContainer>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = S.footer`
    width: 100%;
    background-color: #171717;
    height: 100px;
    position: relative;
    margin-top: -100px;
    bottom: 0;
    z-index: 10;

    @media (max-width: 980px) {
        height: auto;
    }
`;
const InnerFooterContainer = S.div`
    width: 75%;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    @media screen and (max-width: 980px) {
        padding: 20px 20px 100px 20px;
    }
`;
const FooterInformation = S.div`
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    flex-flow: row wrap;
`;
const CopyrightText = S.p`
    font-size: 10px;
    color: #d6d6d6;
    width: fit-content;

    @media screen and (max-width: 520px) {
        text-align: center;
        width: 100%;
    }

`;
const FooterLink = S(Link)`
    color: red;
    font-size: 20px;
    display: flex;
    align-items: center;
    transition: all 120ms ease-in-out;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 520px) {
        font-size: calc(1.5rem + .5vw);
    }
`;

const NormalLink = S.a`
    color: red;
    font-size: 20px;
    display: flex;
    align-items: center;
    transition: all 120ms ease-in-out;

    &:hover {
        color: #fff;
    }

    @media screen and (max-width: 520px) {
        font-size: calc(1.5rem + .5vw);
    }    
`;

const Divider = S.span`
    font-size: 20px;
    color: #d6d6d6;
    font-weight: 100;
    font-family: 'Opan Sans', sans serif;
    margin: 0 5px;
`;

const Content = S.div`
    width: 50%;
    display: flex;
    justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};

    @media screen and (max-width: 520px) {
        width: 100%;
        justify-content: center;
        margin-bottom: 5px;
    }
`;