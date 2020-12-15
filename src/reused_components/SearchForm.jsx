import React from 'react'
import S from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

 function Searchform(props) {

    return (
        <Form>
            <SearchInput></SearchInput>
            <LocationInput></LocationInput>
            <SubmitContainer><SearchIcon icon={faSearch} /></SubmitContainer>
        </Form>
    )
}

export default Searchform;

const Form = S.form`
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SearchInput = S.input`
    background-color: #88888866;
    width: 60%;
    border: #6155a6 3px solid;
    font-size: 20px;
    padding: 5px;
    border-radius: 3px;
`;
const LocationInput = S.input`
    background-color: #88888866;
    width: 30%;
    border: #6155a6 3px solid;
    font-size: 20px;
    padding: 5px;
    border-radius: 3px;
`;

const SubmitContainer = S.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #6155A6;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchIcon = S(FontAwesomeIcon)`
    color: #fff;
    font-size: 24px;
`;