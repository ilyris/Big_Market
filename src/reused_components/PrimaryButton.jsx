import {Link} from 'react-router-dom';
import S from 'styled-components'

const PrimaryButton = S(Link)`
    color: #fff;
    border: 2px solid;
    border-color: #171717;
    background-color: #171717;
    position: relative;
    text-decoration: none;
    font-size: 18px;
    transition: all ease-in-out 120ms;
    padding: 10px 25px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    overflow: hidden;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    min-width: 175px;
    margin-bottom: 20px;
    margin-top: 20px;
    z-index: 10;

    @media (max-width: 980px) {
        font-size: calc(.5rem + 1vw); 
    }

    @media (max-width: 520px) {
        font-size: calc(.8rem + 1.5vw); 
    }
    &:after {
        content: ' ';
        position: absolute;
        background: red;
        z-index: -1;
        height: 100%;
        left: -35%;
        top: 0;
        transform: skew(50deg);
        transition-duration: 0.6s;
        transform-origin: top left;
        width: 0;
        transition: all 0.3s;
    }
    &:hover {
        color: ${props => props.primary ? '#fff' : '#fff' } ;
        border-color: red;
        &:after {
            height: 100%;
            width: 150%; 
        }
    }
`;

export default PrimaryButton;