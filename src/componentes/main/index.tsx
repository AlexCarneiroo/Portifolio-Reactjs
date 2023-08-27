import * as C from '../main/style'
import { Link, Element } from 'react-scroll';
import {FaChevronUp , FaShare , FaAngleDown} from 'react-icons/fa'
// Carrosel

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './styles.css'

import { Swiper , SwiperSlide } from 'swiper/react'




// Tecnologia
import uselogo from '../../logos e imgs/Designer _Flatline.png'
import useimg from '../../logos e imgs/Sending emails_Monochromatic.png'
import git from '../../logos e imgs/tecnologias/git.jpg'
import javaScript from '../../logos e imgs/tecnologias/javascript.jpg'
import node from '../../logos e imgs/tecnologias/nodejs.jpg'
import react from '../../logos e imgs/tecnologias/reactjs.jpg'
import ty from '../../logos e imgs/tecnologias/typescript.jpg'
import do1 from '../../logos e imgs/tecnologias/download (2).png'
import do2 from '../../logos e imgs/tecnologias/download.png'
import html from '../../logos e imgs/tecnologias/html5-e-css3.jpg'
import gitHub from '../../logos e imgs/tecnologias/download (1).png'
import taiw from '../../logos e imgs/tecnologias/tailwindcss.jpg'

//Certificados
import cert1 from '../../logos e imgs/certificados/certificado_1828079.jpg'
import cert2 from '../../logos e imgs/certificados/certificado_4351583.jpg'
import cert3 from '../../logos e imgs/certificados/certificado_6328407.jpg'
import cert4 from '../../logos e imgs/certificados/typeScript.jpg'
import cert5 from '../../logos e imgs/certificados/certificado_4778195 (1).jpg'
import cert6 from '../../logos e imgs/certificados/certificado_5163342.jpg'

//Portifolios

import img1 from '../../logos e imgs/jogo da velha.png'
import img2Imc from '../../logos e imgs/imgs de projetos/IMG1.png'
import imageProgetojogo from '../../logos e imgs/imgs de projetos/screencapture-127-0-0-1-5500-index-html-2023-08-22-18_59_41.png'
import cronometro from '../../logos e imgs/imgs de projetos/cronometro.png'

import { useEffect , useState } from 'react';

export const Main = ()=>{

    const [verMais , setVermais] = useState(false)

    const handlClick =()=>{
        setVermais(true)
    }


    const [isScrrol, setScrool] = useState(false)

    useEffect(()=>{
        const handlScrool = ()=>{
            setScrool(window.scrollY >=80)
        }

        window.addEventListener('scroll' , handlScrool)

        return ()=>{
            window.removeEventListener('scroll', handlScrool)
        }

    },[])

 

    return(
        <C.main>
            {isScrrol &&
                <Link to="voltar">
                    <C.BtnVoltar>
                        <FaChevronUp/>
                    </C.BtnVoltar>
                </Link>
            }
            <Element name="voltar">
                <C.Container>
                    <C.HomeLeft>
                        <C.title>Desenvolvedor Front-End...</C.title>
                        <C.span>Olá eu Sou O <C.bold>Alex Dos Santos Carneiro</C.bold> e Esse é o meu Portifoli Seja Muito Bem Vindo...</C.span>
                        <br />
                        <br />
                        <C.span>Sou Desenvolvedor Front-End A 1 Ano e Meio E Tenho Conhecimentos em <C.bold>JavaScript , ReactJs , TypeScript e NodeJs</C.bold> e Algumas Bibliotecas...</C.span>
                        <C.p>Venha Conhecer Mais <C.link><Link to="parte">Sobre Min...</Link></C.link></C.p>
                    </C.HomeLeft>
                    <C.HomeRight>
                        <C.img src={uselogo} alt="" width={400}/>
                    </C.HomeRight>
                </C.Container>
            </Element>

            <C.redes>
                <C.tecImg src={javaScript} alt="" width={55}/>
                <C.tecImg src={git} alt="" width={55}/>
                <C.tecImg src={ty} alt="" width={55}/>
                <C.tecImg src={html} alt="" width={55}/>
                <C.tecImg src={do1} alt="" width={70}/>
                <C.tecImg src={do2} alt="" width={55}/>
                <C.tecImg src={node} alt="" width={55}/>
                <C.tecImg src={react} alt="" width={55}/>
                <C.tecImg src={gitHub} alt="" width={55}/>
                <C.tecImg src={taiw} alt="" width={55}/>
            </C.redes>

            <C.Container>

                    <C.contraContainer>
                        <Element name="parte">
                            <C.h1>Sobre min</C.h1>
                            <hr />
                            <C.divisao>
                                <C.sobreLeft>
                                    <C.img src={useimg} alt='' width={350}/>
                                </C.sobreLeft>
                                <C.sobreRight>
                                    <C.h2>Pessoal</C.h2>
                                    <C.detalhes>Sou uma Pessoa muito Dedicada No que Faço ,  Tenho o Abito de Ter uma Rotina Fazer sempre Em ordem, Gosto muito de Ler Livros E Estudar passo a metade do meu tempo Estudando!!!</C.detalhes>
                                    <br />
                                    <br />
                                    <C.h2>Profissional</C.h2>
                                    <C.detalhes>Tenho Conhecimento Avançado na Lingua JavaScript e Python, e em liguagem de leituras HTML5 e CSS e alguns framework como ReactJs Tenho conhecimento em TypeScript e outras Bibliotecas , Cursei na empresa B7web e na Danki Code...</C.detalhes>
                                </C.sobreRight>
                            </C.divisao>
                        </Element>
                    </C.contraContainer>
            </C.Container>

            

            <Element name='certificado'>
            <C.certificados>
                <C.h1>Certificaçoes</C.h1>
                <hr />
                <C.carrosel>
                    <Swiper
                        grabCursor
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation
                        className='swiper-styles'
                    >
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert1} alt="" width={350} className='imagi'/>
                                    <C.ss>B7web</C.ss>
                                <C.detalh>
                                    <C.h3 className='git'>Git/GitHub</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert2} alt="" width={350} className='imagi'/>
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='html'>HTML</C.h3>
                                    <C.h3 className='css'>CSS</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert3} alt="" width={350} className='imagi'/>
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='java'>JavaScript</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert4} alt="" width={350} className='imagi'/>
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='type'>TypeScript</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert5} alt="" width={350} className='imagi'/>
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='react'>ReactJs</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <C.slide>
                                <img src={cert6} alt="" width={350} className='imagi'/>
                                <C.detalh>
                                    <C.ss>B7web</C.ss>
                                    <C.h3 className='taiCSS'>TailwindCSS</C.h3>
                                </C.detalh>
                            </C.slide>
                        </SwiperSlide>
                    </Swiper>
                </C.carrosel>
            </C.certificados>
                
            </Element>
            <C.Container>
              
                <C.subiContainer>
                    <Element name='portifolio'>
                        <C.h1>Portifolios</C.h1>
                    </Element>
                    <hr />
                     
                    <C.portifolios>
                        <C.porti>
                            <img src={img1} className='img1' alt="" />
                            <C.optios>
                                <C.titulo>Jogo da Velha</C.titulo>
                                <C.spp>
                                    Lorem ipsum dolor sit amet. Et odio velit et molestiae rerum a veritatis galisum sit illo rerum. Qui veniam neque id corporis nihil ad adipisci nihil non animi omnis. Aut recusandae aspernatur eos numquam tempora et  
                                </C.spp>

                                    <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={react} alt="" width={50} />
                                    <img src={ty} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>

                                <C.irProject className='btnEfeito'>
                                    Ver Projeto
                                    
                                    <FaShare className='incone'/>
                                </C.irProject>

                            </C.optios>
                        </C.porti>
                    </C.portifolios>

                    <hr />
                    <C.portifolios>
                        <C.porti>
                            
                            <C.optios>
                                <C.titulo>Calculadora de IMC</C.titulo>
                                <C.spp>

                                    Por favor, insira seu peso em quilogramas: 70
                                    Agora, insira sua altura em metros: 1.75
                                    Calculando...

                                    Seu IMC é: 22.86

                                    De acordo com o IMC, você está na faixa de peso considerada saudável.

                                    Lembrando que o IMC é uma medida simples, mas não leva em consideração outros fatores como a composição corporal e a distribuição de gordura. Consulte um profissional de saúde para uma avaliação mais completa.

                                </C.spp>

                                    <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={react} alt="" width={50} />
                                    <img src={ty} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50}/>
                                </C.texUse>

                                <C.irProject className='btnEfeito'>
                                    Ver Projeto
                                    
                                    <FaShare className='incone'/>
                                </C.irProject>

                            </C.optios>
                                <img  src={img2Imc} className='img1' alt="" />
                        </C.porti>
                    </C.portifolios>
                    <hr />
                    <C.portifolios>
                        <C.porti>
                            <img  src={imageProgetojogo} className='img1' alt="" />

                            <C.optios>
                                <C.titulo>Pedra Papel Tesoura JS</C.titulo>
                                <C.spp>
                                    Um Joguinho Classico De Pedra Papel e Tesoura Simples Mais Com Muita Logica!!!
                                    <br />
                                    Feito com HTML e CSS E JAVASCRIPT!!!
                                </C.spp>

                                    <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={html} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>

                                <C.irProject className='btnEfeito'>
                                    Ver Projeto
                                    
                                    <FaShare className='incone'/>
                                </C.irProject>

                            </C.optios>
                        </C.porti>
                    </C.portifolios>
                    
                    {!verMais && 
                        <Link to="centra">
                            <C.vermais onClick={handlClick}>Ver Mais  <FaAngleDown/></C.vermais>
                        </Link>
                    }
                    
                    
                    {verMais &&
                    <>
                    <hr />                 
                    <C.portifolios>
                        <C.porti>
                            <C.optios>
                                <C.titulo>Cronometro Moderno</C.titulo>
                                <C.spp>
                                    Esse é um projeto de cronometro moderno e simples de usar bom para fazer um Pomodoro ou algo do tipo
                                    <br />
                                    Feito com HTML e CSS E JAVASCRIPT!!!
                                </C.spp>
                                        <C.titulo>Tecnologias Utilizadas</C.titulo>
                                <C.texUse>
                                    <img src={html} alt="" width={50} />
                                    <img src={javaScript} alt="" width={50} />
                                </C.texUse>

                                <C.linkProjeto href="https://cronometroomoderno.netlify.app/" target='_black'>
                                    <C.irProject className='btnEfeito'>
                                        Ver Projeto 
                                        <FaShare className='incone'/>
                                    </C.irProject>
                                </C.linkProjeto>

                            </C.optios>
                            <img  src={cronometro} className='img1' alt="" />
                        </C.porti>
                    </C.portifolios>                    
                </>
                }
                </C.subiContainer>
            </C.Container>
        </C.main>
    )
}