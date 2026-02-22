import Link from 'next/link'
import React from 'react'

const Collaboration = () => {
    return (
        <div className='w-full flex flex-col items-center px-16 lg:px-32'>
            <div className='w-full max-w-360 flex items-stretch p-[clamp(24px,4vw,80px)] border border-[rgba(0,0,0,0.1)]'>

                <div className='flex-1 flex flex-col gap-5'>
                    <p className='font-cormorant text-gray-400 uppercase font-light text-[10.5px] tracking-[4.2px]'>Collaborative Spirit</p>
                    <p className='font-cormorant text-neutral-900 font-light text-[30px]'>Design Georgia</p>
                    <p className='max-w-[90%] font-inter text-gray-500 font-light text-[14px] leading-[22.8px]'>
                        As co-founders of Design Georgia, we are committed to promoting local craftsmanship and architectural innovation to a global audience.
                    </p>
                    <Link href='/studio' className='self-start cursor-pointer font-inter text-neutral-900 uppercase border-b border-black text-[clamp(8px,1.5vw,10.5px)] tracking-[3.15px]'>Learn More</Link>
                </div>

                <div className='flex-1 flex justify-end'>
                    <div className='aspect-square h-full border border-black flex items-center justify-center'>
                        <div className='px-4 font-inter font-bold text-[10.5px] leading-tight tracking-[2.1px] text-center uppercase'>
                            Design<br /> Georgia — <br />Partner
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Collaboration