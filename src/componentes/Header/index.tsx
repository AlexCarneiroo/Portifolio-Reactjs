import * as C from './styled'
import logMenu from '../../logos e imgs/cardapio.png'
import  { useEffect, useState } from 'react';
import {FaLinkedinIn , FaGithub,FaWhatsapp } from "react-icons/fa";
import './navbar.css';
import {Link}  from 'react-scroll';


export const Headers =()=>{


    const [menu,setMenu] = useState(false)
    const [isnavBar, setNavBar] = useState(false)

    useEffect(()=>{
        const handlScrool = ()=>{
            setNavBar(window.scrollY >= 80)
            setMenu(false)
        }
        
        window.addEventListener('scroll' , handlScrool)

        handlClickMenu()
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
                <Link to={'parte'}><C.a>Sobre Min</C.a></Link>
                <Link to='certificado'><C.a>Certificaçoes</C.a></Link>
                <Link to='portifolio'><C.a>Portifolios</C.a></Link>
                
            </C.menu>

            <C.redes>
                <C.Link href={'https://www.linkedin.com/in/alex-carneiro-731238241/'} target='_blank'>
                    <C.incon><FaLinkedinIn/></C.incon>
                </C.Link>
                <C.Link href={"https://github.com/AlexCarneiroo"} target='_blank'>
                    <C.incon><FaGithub/></C.incon>
                </C.Link>
                <C.Link href={'https://contate.me/desenvovedor-alex'} target='_blank'>
                    <C.incon><FaWhatsapp/></C.incon>
                </C.Link>
            </C.redes>

            <C.menuRespom onClick={handlClickMenu}>
                <C.imgMenu src={logMenu} alt="" width={25}/>
            </C.menuRespom>
            {menu &&
                <C.menuRespomRedes>
                    <C.b>Home</C.b>
                    <br />
                    <Link to={'parte'}><C.b>Sobre Min</C.b></Link>
                    <br />
                    <Link to='certificado'><C.b>Certificaçoes</C.b></Link>
                    <br />
                    <Link to='portifolio'><C.b>Portifolios</C.b></Link>
                </C.menuRespomRedes>
            }
        </C.container>

    )
}