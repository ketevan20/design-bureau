import React from 'react'

const Button = () => {
    return (
        <button className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                                absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                bg-[#ffffff2b] backdrop-blur-sm
                                font-thin text-white text-[14px] leading-[20.1px]
                                px-4 py-2 border border-white uppercase cursor-pointer
                            '>view project</button>
    )
}

export default Button