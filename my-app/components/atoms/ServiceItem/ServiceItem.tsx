import React from 'react'

const ServiceItem = ({ number, text, categories }: { number: string, text: string, categories: string[] }) => {
    return (
        <>
            <div className='font-normal text-[16px] leading-[20.1px] text-[#505050]'>
                <p className='font-bold text-[16px] sm:text-[24px] tracking-[40%] text-black uppercase mb-4 sm:mb-7 opacity-90'>{number}</p>
                {text}
            </div>

            <div className='flex mb-10 sm:mb-0 flex-col gap-2 sm:gap-6 whitespace-nowrap font-normal text-[12px] tracking-[30%] uppercase underline text-[#505050]'>
                {categories.map((category, index) => (
                    <p key={index}>{category}</p>
                ))}
            </div>
        </>
    )
}

export default ServiceItem