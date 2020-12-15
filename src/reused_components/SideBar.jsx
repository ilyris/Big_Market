import React from 'react'
import S from 'styled-components';

function SideBar(props) {
    return (
        <SideBarMenuContainer>
            <SideBarTitle>Categories</SideBarTitle>
            <SideBarMenu>
                <Li>Cars & Trucks</Li>
                <Li>Furniture</Li>
                <Li>Appliances</Li>
                <Li>Baby & Kids</Li>
                <Li>Clothing & Shoes</Li>
                <Li>Auto Parts</Li>
                <Li>Auto Parts</Li>
            </SideBarMenu>
        </SideBarMenuContainer>
    )
}
export default SideBar;

const SideBarMenuContainer = S.aside`
    width: 20%;
    background-color: #fff;
    height: 500px;
    border-radius: 15px;
`;
const SideBarTitle = S.h3`
    font-size: 28px;
    color: #fff;
    width: 100%;
    text-align: center;
    background-color: gray;
    padding: 10px 0;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;
const SideBarMenu = S.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 80%;
    margin: 10px auto;
`;
const Li = S.li`
    list-style: none;
    padding: 5px 0;
    margin: 10px;
    font-size: 20px;
`;