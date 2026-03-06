'use client'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='fixed z-1000 font-inter w-full flex items-center justify-center bg-white px-3 py-4 md:px-6 lg:px-16'>
                <div className='w-full max-w-480 flex items-center justify-between leading-[100%] tracking-[2.1px] text-black'>
                    <Link href='/'><p className='text-[21px] font-light uppercase'>design<span className='font-black'>bureau</span></p></Link>
                    <div className='hidden sm:flex font-medium text-[12px] uppercase  gap-4 md:gap-10.5'>
                        <Link href='/studio' className={`${pathname === '/studio' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Studio</Link>
                        <Link href='/projects' className={`${pathname === '/projects' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Projects</Link>
                        <Link href='/contact' className={`${pathname === '/contact' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Contact</Link>
                        <Link href='/services' className={`${pathname === '/services' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Services</Link>
                    </div>
                </div>
            </div>
            <div className='block sm:hidden fixed z-10000 right-3 top-3'>
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-1000"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 h-screen w-[70%] bg-white border-l border-black/10 z-1001 flex flex-col px-10 py-12"
                        >


                            <div className="flex flex-col gap-10 mt-20 text-[22px] font-light tracking-wide uppercase">


                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href="/studio"
                                        onClick={() => setIsOpen(false)}
                                        className={`group relative inline-block transition-all duration-300
                                        ${pathname === '/studio' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Studio</span>
                                        <span className={`absolute left-0 -bottom-2 h-px bg-black transition-all duration-300 ${pathname === '/studio' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </Link>
                                </motion.div>

                                {/* Projects */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href="/projects"
                                        onClick={() => setIsOpen(false)}
                                        className={`group relative inline-block transition-all duration-300
                                        ${pathname === '/projects' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">Projects</span>
                                        <span className={`absolute left-0 -bottom-2 h-px bg-black transition-all duration-300 ${pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </Link>
                                </motion.div>

                                {/* Contact */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className={`group relative inline-block transition-all duration-300
                                        ${pathname === '/contact' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">contact</span>
                                        <span className={`absolute left-0 -bottom-2 h-px bg-black transition-all duration-300 ${pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </Link>
                                </motion.div>

                                {/* Services */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href="/services"
                                        onClick={() => setIsOpen(false)}
                                        className={`group relative inline-block transition-all duration-300
                                        ${pathname === '/services' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">services</span>
                                        <span className={`absolute left-0 -bottom-2 h-px bg-black transition-all duration-300 ${pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header