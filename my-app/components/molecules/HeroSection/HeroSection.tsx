import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-dvh flex flex-col items-center px-16 overflow-hidden'>
            
            <div className='w-full h-full pt-[clamp(60px,12vh,155px)] max-w-360 flex flex-col justify-between gap-[clamp(1rem,4vh,4rem)] xl:gap-[clamp(1rem,8vh,4rem)] '>
                
                <div className='flex-none flex flex-col gap-[clamp(0.5rem,4vh,3rem)]'>
                    <p className='max-w-200 font-cormorant font-normal text-[clamp(2rem,4vh,3rem)] leading-[125%]'>
                        <span className='font-bold text-[clamp(2.5rem,6vh,4rem)] uppercase'>
                            architecture & design studio 
                        </span> Based in Tbilisi, Georgia.
                    </p>
                    
                    <div className='w-full flex'>
                        <div className='flex-1'>
                            <p className='text-[clamp(0.8rem,2vh,1rem)] font-black leading-none tracking-widest underline uppercase cursor-pointer'>
                                View Portfolio
                            </p>
                        </div>
                        <div className='flex-1 flex justify-between font-thin text-[clamp(0.5rem,2vh,0.9rem)] tracking-wider uppercase'>
                            <p className='max-w-50'>DesignBureau counts on an international team composed by experienced</p>
                            <p>info@designbureau.ge</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 min-h-0 w-full flex items-center overflow-hidden'>
                    <img 
                        src="/Tskneti_Architecture.svg" 
                        alt="Tskneti Architecture" 
                        className='w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 origin-center transition-all duration-1000 ease-out'
                    />
                </div>

                <div className='flex-none w-full flex justify-end font-normal text-[clamp(0.5rem,2.4vh,1rem)] leading-[100%] tracking-[0%]'>
                    <div className='w-[50%]'>
                        <p>
                            DesignBureau is a multidisciplinary studio focused on creating spaces and objects that endure. Founded in 2004 in Tbilisi.<br/> DesignBureau is a multidisciplinary studio focused on creating spaces and objects that endure. Founded in 2004 in Tbilisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection