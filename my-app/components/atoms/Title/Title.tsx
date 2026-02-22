import React from 'react'

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div>
            <p className='pl-4 border-l border-[#0000005f] font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%] uppercase'>{subtitle}</p>
            <h1 className='font-cormorant font-semibold sm:font-normal text-[24px] sm:leading-14.5 sm:text-[clamp(2rem,6vh,4rem)] uppercase'>{title}</h1>
        </div>
    )
}

export default Title