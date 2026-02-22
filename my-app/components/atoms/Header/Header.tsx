'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()

    return (
        <div className='fixed z-1000 font-inter w-full px-6 py-4 flex items-center justify-center bg-white lg:px-16'>
            <div className='w-full max-w-360 flex items-center justify-between leading-[100%] tracking-[2.1px] text-black'>
                <Link href='/'><p className='text-[21px] font-light uppercase'>design<span className='font-black'>bureau</span></p></Link>
                <div className='flex gap-10.5 font-medium text-[12px] uppercase'>
                    <Link href='/studio' className={`${pathname === '/studio' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Studio</Link>
                    <Link href='/projects' className={`${pathname === '/projects' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Projects</Link>
                    <Link href='/contact' className={`${pathname === '/contact' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Contact</Link>
                    <Link href='/services' className={`${pathname === '/services' ? 'opacity-100' : 'opacity-50'} hover:opacity-100`}>Services</Link>
                </div>
            </div>
        </div>
    )
}

export default Header