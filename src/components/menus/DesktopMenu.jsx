import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import S from 'styled-components';
import {Link} from 'react-router-dom';
import { useScrollPosition } from '../../custom_hooks/useScrollPosition';
import PrimaryButton from '../../reused_components/PrimaryButton';
import {ReactComponent as Logo} from '../../logo.svg';
import SearchForm from '../../reused_components/SearchForm';

const DesktopMenu = (props) => {

    const [headerStyle, setHeaderStyle] = useState({transition: 'all 200ms ease-in'});

    useScrollPosition( ({prevPos, currPos}) =>{
        const isVisible = currPos.y > prevPos.y;
        const shouldBeStyle = {
            visibility: isVisible ? 'visible' : 'hidden',
            transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
            transform: isVisible ? 'none' : 'translate(0, -100%)',
        }

        if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return
        setHeaderStyle(shouldBeStyle)

    }, [headerStyle])
    let location = useLocation();

    return(
        <MenuContainer style={{...headerStyle}}>
            <MenuContainerInner>
                <LogoContainer>
                    <StyledLink to="/">
                        <StyledLogo></StyledLogo>
                    </StyledLink>
                </LogoContainer>
                <SearchForm/>
                <MenuItemsWrapper>
                    <MenuItems>
                        <StyledLink to="/projects">Home</StyledLink>
                    </MenuItems>
                    <MenuItems>
                        <StyledLink to="/services">About</StyledLink>
                    </MenuItems>
                    <MenuItems>
                        <StyledLink to="/reviews">Signup</StyledLink>
                    </MenuItems>
                    <MenuItems>
                        <Login to="/contact">Login</Login>
                    </MenuItems>
                </MenuItemsWrapper>
            </MenuContainerInner>
        </MenuContainer>
    );
}

export default DesktopMenu;

const MenuContainer = S.div`
    width: 100%;
    position: fixed;
    display: flex;
    top: 0;
    z-index: 100000;
    padding: 10px 0;
    flex-flow: row wrap;
    background-color: #171717;
    background-color: #fff;

    @media (max-width: 520px) {
        padding-top: 0;
    }
`;
const MenuContainerInner = S.div`
    width: 75%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
`;

const MenuItemsWrapper = S.ul`
    width: auto;
    display: flex;
    align-items: center;

    @media (max-width: 980px) {
        display: ${props => props.additionalInformation ? "flex" : "none"};
        justify-content: ${props => props.additionalInformation ? "center" : "unset"};
        width: ${props => props.additionalInformation ? "100%" : "auto"};
    }
`;

const MenuItems = S.li`
    display: flex;
    align-items: center;
    margin-right: 20px;

    &:last-of-type {
        margin-right: 0;
    }
`;

const StyledLink = S(Link)`
    color: #6155A6;
    text-decoration: none;
    font-size: 14px;
    transition: all ease-in-out 120ms;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
        color: red;
    }

    @media (max-width: 980px) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.additionalInformation ? "16px" : "calc(2rem + 1vw)"};
    }
`;
const StyledA = S.a`
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    transition: all ease-in-out 120ms;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
        color: red;
    }

    @media (max-width: 980px) {
        width: 100%;
        text-align: center;
        font-size: ${props => props.additionalInformation ? "16px" : "calc(2rem + 1vw)"};
    }
`;

const LogoContainer = S.div`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    @media (max-width: 980px) {
        width: 100%;
    }

    @media (max-width: 520px) {
        padding: 10px 0;
    }
`;


const Login = S(PrimaryButton)`
    padding: 10px 5px;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    min-width: 75px;
    margin: 0;
    background-color: #6155A6;
    border: none;

    @media (max-width: 980px) {
        font-size: 14px;
        padding: 5px 10px;

    }
`;
const StyledLogo = S(Logo)`
    width: 100px;

    @media (max-width: 520px) {
        width: 100px;
    }
`;