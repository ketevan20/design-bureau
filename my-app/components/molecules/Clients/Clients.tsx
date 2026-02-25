'use client'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import { motion } from 'motion/react'
import React, { useState } from 'react'

const logos1 = [
    "tbc.svg",
    "silknet.svg",
    "mukhrani.svg",
    "dasta.svg",
    "evex.svg",
    "elit.svg"
];

const logos2 = [
    "Clients-logo-1.svg",
    "gwp.svg",
    "impact-hub.svg",
    "wendys.svg",
    "zoomer.svg",
    "wissol.svg"
];

const Clients = () => {
    return (
        <div className='w-full max-w-480 overflow-hidden'>
            <Subtitle subtitle='clients' />

            <div className="mt-6 flex flex-col gap-20 overflow-hidden">
                <motion.div
                    className="flex w-max"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity
                    }}
                >
                    <div className="flex items-center gap-16 pr-16 sm:gap-32 sm:pr-32">
                        {logos1.map((logo, index) => (
                            <img key={`logo-1-${index}`} src={logo} alt="client logo" />
                        ))}
                    </div>

                    <div className="flex items-center gap-16 pr-16 sm:gap-32 sm:pr-32">
                        {logos1.map((logo, index) => (
                            <img key={`logo-2-${index}`} src={logo} alt="client logo" />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="flex w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity
                    }}
                >
                    <div className="flex items-center gap-16 pr-16 sm:gap-32 sm:pr-32">
                        {logos2.map((logo, index) => (
                            <img key={`logo-1-${index}`} src={logo} alt="client logo" className='max-sm:h-16'/>
                        ))}
                    </div>

                    <div className="flex items-center gap-16 pr-16 sm:gap-32 sm:pr-32">
                        {logos2.map((logo, index) => (
                            <img key={`logo-2-${index}`} src={logo} alt="client logo" className='max-sm:h-16'/>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Clients