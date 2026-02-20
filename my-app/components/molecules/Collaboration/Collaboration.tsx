import React from 'react'

const Collaboration = () => {
    return (
        <div className='w-full flex flex-col items-center px-16'>
            <div className='w-full max-w-360 flex items-center p-21 border border-[rgba(0,0,0,0.1)]'>
                <div className='flex-1 flex flex-col gap-5'>
                    <p className='font-cormorant text-[rgba(156,163,175,1)] uppercase font-light text-[10.5px] tracking-[4.2px] leading-3.5'>Collaborative Spirit</p>
                    <p className='font-cormorant text-[rgba(26,26,26,1)] font-light text-[30px] tracking-[0%] leading-8.75'>Design Georgia</p>
                    <p className='font-inter text-[rgba(107,114,128,1)] font-light text-[14px] tracking-[0%] leading-[22.8px]'>As co-founders of Design Georgia, we are committed to promoting local craftsmanship and architectural innovation to a global audience.</p>
                    <p className='self-start cursor-pointer font-inter text-[rgba(26,26,26,1)] uppercase border-b border-[rgba(26,26,26,1)] text-[clamp(8px,1.5vw,10.5px)] leading-3.75 tracking-[3.15px]'>Learn More</p>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <div className='w-42 h-42 border border-black flex items-center justify-center'>
                        <div className='px-4 font-inter font-bold text-[10.5px] leading-4.25 tracking-[2.1px] text-center uppercase'>
                            Design<br /> Georgia — <br />Partner
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration