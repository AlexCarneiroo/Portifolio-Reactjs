import * as C from './styled'
import {Link} from 'react-router-dom'
import logMenu from '../../logos e imgs/cardapio.png'
import  { useEffect, useState } from 'react';
import {FaLinkedinIn , FaGithub,FaWhatsapp } from "react-icons/fa";
import './navbar.css';



export const Headers =()=>{


    const [menu,setMenu] = useState(false)
    const [isnavBar, setNavBar] = useState(false)

    useEffect(()=>{
        const handlScrool = ()=>{
            setNavBar(window.scrollY >= 80)
        }
        
        window.addEventListener('scroll' , handlScrool)

    },[])


    const handlClickMenu = ()=>{
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }

    return(
        
        <C.container className={`navbar ${isnavBar ? 'hidden' : ''}`}>

            <C.name>
                <C.span>A</C.span>lex <C.span>C</C.span>arneiro
            </C.name>
            <C.menu>
                <C.a>Home</C.a>
                <C.a>Sobre Min</C.a>
                <C.a>Certificaçoes</C.a>
                <C.a>Portifolios</C.a>
            </C.menu>

            <C.redes>
                <Link to={'https://www.linkedin.com/in/alex-carneiro-731238241/'} target='_blank'>
                    <C.incon><FaLinkedinIn/></C.incon>
                </Link>
                <Link to={"https://github.com/AlexCarneiroo"} target='_blank'>
                    <C.incon><FaGithub/></C.incon>
                </Link>
                <Link to={'https://contate.me/desenvovedor-alex'} target='_blank'>
                    <C.incon><FaWhatsapp/></C.incon>
                </Link>
            </C.redes>

            <C.menuRespom onClick={handlClickMenu}>
                <C.imgMenu src={logMenu} alt="" width={25}/>
            </C.menuRespom>
            {menu &&
                <C.menuRespomRedes>
                    <C.b>Home</C.b>
                    <C.b>Sobre Min</C.b>
                    <C.b>Certificaçoes</C.b>
                    <C.b>Portifolios</C.b>
                </C.menuRespomRedes>
            }
        </C.container>

    )
}