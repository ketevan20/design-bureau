import React from 'react'

const ServiceItem = ({ number, text, categories }: { number: string, text: string, categories: string[] }) => {
    return (
        <>
            <p className='font-normal text-[14px] tracking-[30%]'>
                {number}
            </p>

            <p className='font-normal text-[16px] leading-[20.1px] text-[#505050]'>
                {text}
            </p>

            <div className='flex flex-col gap-6 whitespace-nowrap font-normal text-[12px] tracking-[30%] uppercase underline text-[#505050]'>
                {categories.map((category, index) => (
                    <p key={index}>{category}</p>
                ))}
            </div>
        </>
    )
}

export default ServiceItem