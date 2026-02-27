'use client'
import { motion } from 'motion/react';
import React from 'react'

const Title = ({ title, subtitle }: { title: string; subtitle: string }) => {
    return (
        <div>
            <div className='flex'>
                <span className='pl-4 border-l border-[#0000005f]'></span>
                <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} viewport={{ once: true }} className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%] uppercase'>{subtitle}</motion.p>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} viewport={{ once: true }} className='font-cormorant font-semibold sm:font-normal text-[24px] sm:leading-14.5 sm:text-[clamp(2rem,6vh,4rem)] uppercase'>{title}</motion.h1>
        </div>
    )
}

export default Title