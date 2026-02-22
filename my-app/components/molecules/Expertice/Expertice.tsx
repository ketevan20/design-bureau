import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Image from 'next/image'
import React from 'react'

const Expertice = () => {
    return (
        <div className='w-full max-w-360'>
            <Subtitle subtitle='expertice'/>
            <div className='flex flex-col gap-[clamp(1rem,2vw,2rem)] mt-6 font-bold text-[clamp(1.125rem,1vw,1.5rem)] tracking-[40%] uppercase'>
                <p>Architecture</p>
                <p>Interior Design</p>
                <p>Product design</p>
                <p>Branding & Graphic Design</p>
            </div>
        </div>
    )
}

export default Expertice