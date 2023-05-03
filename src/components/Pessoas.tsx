import React from 'react'

interface props{
  imagem : string,
  descricao : string

}

export default function Pessoas({imagem, descricao}: props) {
  return (
    <div className='grid justify-items-center mb-56'>
        <img src={imagem} alt="" width={200} className='rounded-full'/>
        <p className='mt-10'>{descricao}</p>
    </div>
  )
}
