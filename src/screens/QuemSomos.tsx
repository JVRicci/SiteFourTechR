import React from 'react'
import Pessoas from '../components/Pessoas'
import {eu, rebeca, sthaner} from '../assets/img/Imgs'

export default function QuemSomos() {


  var lista = [
                [  
                  rebeca,
                  'Rebeca ',
                  'CEO / Desenvolvedora Front-End'
                ],
                [
                  'https://github.com/JVRicci.png',
                  'João Vitor',
                  'Desenvolvedor FullStack da equipe'
                ],
                [
                  sthaner,
                  'Sthaner',
                  'Lider Liberal do time.'
                ]
              ]
            
  return (
    <div className='flex justify-center items-center gap-24 mx-5
                    sm:mx-20 '>
    {/* data-aos="fade-zoom-in" data-aos-duration='3000'> */}

      {
        lista.map((pessoa, i)=>{
          return(
            <div className="flex bg-zinc-700 p-5 flex-wrap justify-center items-center rounded-lg  hover:duration-3000 hover:w-96 hover:text-2xl 
            sm:w-80" key={i}
              data-aos="fade-down" data-aos-duration="3000">
              <img src={pessoa[0]} alt="" className='rounded-full  drop-shadow-md shadow-blue-300 
              hover:-translate-y-1 hover:duration-3000 '/>
              
              <div className="grid grid-flow-row">
                <h6 className='font-semibold py-4 text-justify hover:text-3xl'>{`${pessoa[1]}`}</h6> 
                <p className='font-light  text-xs  max-h-28  hover:text-2xl hover:duration-3000 '>{`${pessoa[2]}`}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
