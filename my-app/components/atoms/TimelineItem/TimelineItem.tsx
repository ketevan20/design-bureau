import React from 'react'

const TimelineItem = ({year, title, description}: {year: string, title: string, description: string}) => {
    return (
        <div className='max-w-60 relative flex-1 pl-7 pt-3 flex flex-col gap-1'>
            <div className='absolute w-5.75 h-5.75 bg-[#D9D9D9] rounded-full left-0 top-0 -translate-y-[50%]'></div>
            <p className='font-cormorant text-[clamp(1.75rem,2.5vw,40px)] leading-[125%] tracking-normal text-[#949494]'>{year}</p>
            <p className='font-bold text-[clamp(0.75rem,1.2vw,14px)] leading-[12.3px] tracking-[0.82px] uppercase'>{title}</p>
            <p className='font-normal text-[clamp(0.75rem,1.2vw,14px)] leading-[140%] tracking-normal'>{description}</p>
        </div>
    )
}

export default TimelineItem