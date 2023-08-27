import styled from 'styled-components'
import Mont from '../../fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
import Title from '../../fonts/Caveat-VariableFont_wght.ttf'


export const container = styled.div`
    width: 100%;
    padding: 7px 65px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    @media (max-width:900px){
        padding: 7px 20px;
    }
`;

export const hidden = styled.div`
    display: none;
`;


export const name = styled.h1`
    color: #263238;
    font-size: 2rem;
    font-family: 'Caveat';

    @font-face {
        font-family: 'Caveat' ;
        src: url(${Title});
    }


    &::before{
    content: '<';
    }
    &::after{
        content: '/>';
    }

    @media (max-width:410px){
        font-size: 1.1rem;
    }

`;

export const span = styled.span`
    color: #3F51B5;
    font-family: 'Caveat', cursive;
    font-weight: 700;


`;

export const menu = styled.div`
    width: 500px;
    justify-content: space-between;
    text-align: center;


    @media (max-width:900px){
        display: none;
    }
`;

export const a = styled.a`
    margin: 0px 5px ;
    color: #455A64;
    padding: 5px 20px;
    transition: .4s ease-in-out;
    cursor: pointer;
    font-family:'Montserrat';
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;


    @font-face {
        font-family: 'Montserrat' ;
        src: url(${Mont});
    }

    &:hover{
    color: #303F9F;
    background-color:#C5CAE9;
    
    font-weight: 500;
    }
`;



export const redes = styled.div`
    width:150px;
    display: flex;
    justify-content: space-around;
`;
export const incon = styled.i`
    font-size: 1.1rem;
    padding: 8px;
    margin: 0;
    transition: .2s ease-in-out;
    color:#303F9F;
    border-radius:5px;
    
    &:hover{
        background-color: #C5CAE9;
    }
`;

export const menuRespom = styled.div`
    cursor: pointer;

    @media (min-width:900px){
        display: none;
    }
`;

export const imgMenu = styled.img``;


export const menuRespomRedes = styled.div`
    display: flex;
    width: 100%;
    background-color: rgba(48, 63, 159,.5);   
    flex-direction: column;
    padding: 10px;
    align-items:center;
    position: absolute;
    top: 50px;
    font-family: 'Montserrat';


    @font-face {
        font-family: 'Montserrat' ;
        src: url(${Mont});
    }

    @media (min-width:900px){
        display: none;
    }
    
`;
export const b = styled.a`
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    padding: 5px;


    &:hover{
        text-decoration: underline;
    }
`;


export const Link = styled.a`

`;



