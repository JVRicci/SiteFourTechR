
import { DeviceMobile , Browsers, Lightbulb   } from 'phosphor-react'

export default function Projetos (){
    return(
        <>
        <div className="flex flex-row justify-center items-center mt-10 pb-10 gap-10">
                
                <div className="">
                    
                    <div className="grid grid-cols-2 justify-center p-5
                                    md: w-96 bg-zinc-600 rounded-lg " data-aos='fade-right'>
                        
                        <Browsers color='white' height={100} width={100} className='mt-14'/>  
                        <div>
                            <h4 className="text-2xl font-bold mb-2 hover:-translate-y-1 hover:text-3xl hover:duration-500">Sites</h4>
                            <p>Se você deseja sites <strong className="hover:-translate-y-1 hover:text-lg hover:duration-500 hover:capitalize">atrativos</strong> e que ajudem nos seus processos, ou mesmo que ajudem a divulgar seus serviços,
                            veio ao <strong className="hover:translate-x-1 hover:text-lg hover:duration-500 hover:capitalize">Lugar Certo!</strong> Sites sofisticados são nossa <strong className="hover:-translate-y-1 hover:text-md hover:duration-500 hover:uppercase">especiálidade!</strong> </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 justify-center p-5
                                    md: w-96  bg-zinc-600 rounded-lg  my-32 " data-aos='fade-left'>


                        <DeviceMobile color='white' height={100} width={100} className='mt-14 hover:animate-[wave_2s_ease-in-out_2] '/> 
                        
                        <div className=''>
                            <h4 className="text-2xl font-bold mb-2 hover:-translate-y-1 hover:text-3xl hover:duration-500">Mobile</h4>

                            <p>Podemos te ajudar no desenvolvimento de aplicativos mobile, <strong  className="hover:-translate-x-5 hover:text-2xl hover:duration-100 hover:capitalize ">
                                    rápidos e agradáveis </strong> capazes de solucionar seus problemas e auxiliar em atividades corriqueiras
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-center p-5
                                    md: w-96  bg-zinc-600 rounded-lg " data-aos='fade-right'>
                        
                        <Lightbulb color='white' height={100} width={100} className='mt-5 hover:bg-yellow-400 hover:bg-auto hover: rounded-full hover:p-5 houver: duration-500'/> 
                    
                        <div>
                            <h6 className="font-bold text-2xl mb-2 hover:-translate-y-1 hover:text-3xl hover:duration-500">Outras Idéias</h6>
                            <p>Possui alguma ideia ou sugestão? Compartilha conosco! Quem sabe não fazemos essa ideia se tornar  <strong  className="hover:-translate-y-1 hover:text-lg hover:duration-500 hover:uppercase">
                                    realidade!
                                </strong> 
                            </p>
                        </div>
                    </div>

                </div>
                
        </div>
        </>
    )


}