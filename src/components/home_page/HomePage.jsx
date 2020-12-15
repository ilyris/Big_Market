import React from 'react';
import S from 'styled-components';
import SideBar from '../../reused_components/SideBar';

const HomePage = () => {
    const number = [
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
        { 
            title: 'Something',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
        },
    ]
    return (
        <MainContainer>
            <SideBar></SideBar>
            <GridContainer>
                {number.map( listing => {
                    return(
                        <Box>
                            <ListingTitle>{listing.title}</ListingTitle>
                            <ListingText>{listing.description}</ListingText>
                        </Box>
                    )
                })}
            </GridContainer>
        </MainContainer>
    )
}

export default HomePage;

const MainContainer = S.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`;
const GridContainer = S.main`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
`;

const Box = S.div`
    padding: 10px;
    background-color: #fff;
    overflow: hidden;
    break-inside: avoid;
    border-radius: 10px;
`;

const ListingImg = S.img`
    max-width: 100%;
`;

const ListingTitle = S.h3`
    margin: 10px 0;
    padding: 0;
    font-size: 20px;
`;
const ListingText = S.p`
    margin: 0;
    padding: 0 0 10px;
    font-size: 16px;
`;
