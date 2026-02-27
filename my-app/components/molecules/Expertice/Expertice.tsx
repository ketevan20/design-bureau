'use client'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import { motion } from 'motion/react'
import Image from 'next/image'
import React from 'react'

const Expertice = () => {
    return (
        <div className='w-full max-w-480'>
            <Subtitle subtitle='expertice'/>
            <div className='flex flex-col gap-[clamp(1rem,2vw,2rem)] mt-6 font-bold text-[14px] sm:text-[clamp(1.125rem,1vw,1.5rem)] tracking-[40%] uppercase'>
                <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 0.5}} viewport={{once: true}}>Architecture</motion.p>
                <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 0.5}} viewport={{once: true}}>Interior Design</motion.p>
                <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 0.5}} viewport={{once: true}}>Product design</motion.p>
                <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 0.5}} viewport={{once: true}}>Branding & Graphic Design</motion.p>
            </div>
        </div>
    )
}

export default Expertice