import React from 'react'

export default function Home() {
  function scrollBlur(){
  }

  return (
    <div className='h-screen flex  items-center gap-20 bg-city2 bg-fixed'>
                      
                    {/* md:grid-cols-2  */}

      <div className="drop-shadow-sm col-start-5 ml-52 z-100 backdrop-blur-3xl" 
      data-aos="fade" data-aos-duration="3000">
        
      
          <h1 className="font-bold drop-shadow-xl hover:duration-300 hover:text-8xl " >Four Tech</h1>
          <p className='font-light mt-4 hover:text-5xl hover:duration-300'>Uma empresa para você</p>
          
      </div>
    </div>
  )
}

