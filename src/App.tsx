import { useState } from 'react'
import './styles/global.css';
import Home from './screens/Home';
import QuemSomos from './screens/QuemSomos';
import Header from './components/Header';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Projetos from './screens/Projetos';


export default function App() {
  AOS.init()

  return (
    <div className="">

      
      <Header />

      <section className='h-screen w-screen ' id="HomeSection">
        <Home />
      </section>

      <section className='h-screen w-screen mt-72' id="QuemSomosSection" >
        <QuemSomos />
      </section>

      <section className='h-screen w-screen' id="ProjetosSection">
        <Projetos/>
      </section>
    </div>
  )
}