import styled from 'styled-components'
import Mont from '../../fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
import Title from '../../fonts/Caveat-VariableFont_wght.ttf'

export const main = styled.div`
    width: 100%;
    max-width: 900px;
    margin-top: 20px;
    display: flex;
    margin: 20px auto;
    flex-direction: column;
    font-family: 'Montserrat';
    margin-top: 70px;
    @font-face {
        font-family: 'Montserrat';
        src: url(${Mont});
    }
`;


//Home

export const Container = styled.div`
    width: 100%;
    background-color:#F5F5F5;
    border-radius: 10px;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .1);
    margin-bottom: 5px;
    @media (max-width:850px) {
        flex-direction: column;
    }
`;

export const HomeLeft = styled.div`
    width: 100%;
    padding:40px;

    @media (max-width:850px) {
        padding: 0 40px;
    }
`;

export const title = styled.h1`
    font-size: 2.5rem;
    padding: 0 15px 0 0;
    font-weight: bold;
    color:#1A237E;
    margin-bottom: 20px;


    @media (max-width:450px) {
        font-size:1.5rem   
    }
`;
export const span = styled.span`
    font-size: 1rem;
    color: #263238;
    font-weight: 400;
`;
export const p = styled.p`
    font-size: .9rem;
    text-align: center;
    margin: 20px;
`;

export const bold = styled.span`
    font-weight: bold;
`;
export const link = styled.span`
    font-weight: bold;
    color:#263238 ;

    &:hover{
        text-decoration:underline;
        cursor: pointer;
    }
`;

export const HomeRight = styled.div`
    width: 100%;
    display: flex;

    @media (max-width:850px) {
        justify-content: center;
    }
`;

export const img= styled.img`

    @media (max-width:450px) {
        width: 300px;
    }
`;

//Tecnologias

export const redes = styled.div`
    display: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const tecImg = styled.img`
    transition: .2s ease-in;
    margin: 10px 0 40px;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;


//Sobre min

export const contraContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const h1 = styled.h1`
    width: 100%;
    text-align: center;
    color: #1A237E ;
    font-family: 'Caveat';
    margin: 0 0 10px 0;

    @font-face {
        font-family: 'Caveat' ;
        src: url(${Title});
    }

    &:before{
        content: '<';
    }
    &::after{
        content: '/>';
    }
`;

export const divisao = styled.div`
    display: flex;
    width: 100%;

    @media (max-width:900px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const sobreLeft = styled.div`
    flex: 1;
    width: 100%;
    display: flex;

    @media (max-width:900px){
        justify-content: center;
        width: 80%;
    }
`;
export const sobreRight = styled.div`
    flex:1;
    padding: 30px;
        @media (max-width:900px){
        width: 100%;
        max-width: 500px;
        text-align: center;
    }
`;

export const h2 = styled.h2`
    color:rgb(38, 50, 56) ;
    font-size: 2rem;
`;

export const detalhes = styled.span`
    color:#424242 ;
    font-size: .9rem;
    margin-left: 5px;
`;

export const BtnVoltar = styled.button`
    width: 50px;
    height: 50px;
    color: #FFF;
    background-color:rgb(159, 168, 218) ;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 0 20px 20px 0;

    &:hover{
        color: rgb(232, 234, 246);
    }    
`;


//Certificados

export const  certificados = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 0px 20px;
    position: relative;
    margin:30px 0;

`;

export const carrosel = styled.div`
    
`;
export const slide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const detalh = styled.div`
    text-align: center;
`;

export const ss = styled.h4`
    color: #424242;
`;
export const h3 = styled.h3`
    font-size: 1rem;
`;


//Potifolios

export const subiContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 0 10px;
`;

export const portifolios = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: all .3s ease-in-out;
`;

export const porti = styled.div`
    width: 100%;
    display: flex;
    align-items: flex;
    border-radius: 5px;
    margin: 45px 0;

    @media (max-width:850px) {
        flex-direction: column;
        align-items:center;
    }
`;
export const optios = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    position: relative;

    @media (max-width:850px) {
        align-items:center;
    }
`;

export const titulo = styled.h1`
    font-size: 1.3rem;
    color: #212121;
`;
export const spp = styled.span`
    font-size: .9rem;
    line-height: 25px;
    color: #424242;
    margin: 25px 0;

    @media (max-width:850px) {
        text-align: center;
    }
`;

export const texUse = styled.div`
    margin: 15px 0 20px 0;
    display: flex;
    @media (max-width:850px) {
        align-items:center;
    }
`;

export const irProject = styled.div`
    width: 170px;
    height: 30px;
    color: #283593;
    border: 2px solid #283593 ;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all ease-in-out .2s;
    border-radius: 2px;

    &::before{
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;

        width: 100%;
        height: 100%;
        
        z-index: -1;
    }



    &:hover{
        background-color: #283593;
        color: white;
    }
`;


export const contImage = styled.div`
    width: 60%;
    display: flex;
    position: relative;

`;


export const vermais = styled.div`
    margin: 0 auto;
    padding: 5px 20px;
    font-size: .9rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
    margin: 10px 0;
    color: #283593;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: #5C6BC0;
    }
`;

export const linkProjeto = styled.a`
    text-decoration: none;

`