import React from 'react'
import logo from '../assets/img/logo.png'

export default function Header() {
    const homeSection = document.querySelector('#HomeSection');
    const quemSomosSection = document.querySelector('#QuemSomosSection');
    const projetosSection = document.querySelector('#ProjetosSection');
    const contatoSection = document.querySelector('#HomeSection');

    const handleAnchorClick = (element: Element | null) =>{
        if( element == homeSection){
            homeSection?.scrollIntoView({behavior: 'smooth'})
        }
        else if(element == quemSomosSection){
            quemSomosSection?.scrollIntoView({ behavior: 'smooth' } )
        }
        else if(element == projetosSection){
            projetosSection?.scrollIntoView({behavior: 'smooth'})
        }
        else if(element == contatoSection){
            homeSection?.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <header>
            <nav className='flex gap-6
                            fixed top-8 ml-10 z-50 
                            '
            data-aos="fade-down" data-aos-duration="2500">
                
                <img src={logo} alt="Logo" width={50} height={100}  />

                <h6 onClick={()=>handleAnchorClick(homeSection)}  className='text-zinc-50 backdrop-blur rounded-xl p-1 
                    hover:text-zinc-300 hover:translate-y-1 hover:duration-300 hover:text-md '>
                    Home
                </h6>
                <h6 onClick={()=>handleAnchorClick(quemSomosSection)} className='text-zinc-50 backdrop-blur rounded-xl p-1
                    hover:text-zinc-300 hover:translate-y-1 hover:duration-300 hover:text-md  '>
                    Sobre nós
                </h6>
                <h6 onClick={()=>handleAnchorClick(projetosSection)} className='text-zinc-50  backdrop-blur rounded-xl p-1  
                    hover:text-zinc-300 hover:translate-y-1 hover:duration-300 hover:text-md '>
                    Projetos
                </h6>
                <h6 onClick={()=>handleAnchorClick(contatoSection)} className='text-zinc-50 backdrop-blur  rounded-xl p-1 
                    hover:text-zinc-300 hover:translate-y-1 hover:duration-300 hover:text-md '>
                    Contato
                </h6>
            </nav>
        </header>
    )
}
