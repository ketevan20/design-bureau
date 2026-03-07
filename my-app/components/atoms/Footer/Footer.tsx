import React from 'react'

const Footer = () => {
  return (
    <div className='relative bottom-0 w-full px-3 py-4 flex items-center justify-center font-inter bg-[rgba(26,26,26,1)] sm:px-6 lg:p-16'>
        <div className='w-full max-w-480 flex flex-col gap-21 text-white'>
            <div className='flex flex-col gap-6 md:flex-row md:gap-14'>
                <div className='max-w-70'>
                    <p className='font-cormorant font-light text-[21px] leading-7 tracking-[2.1px] uppercase mb-3 md:mb-3.75'>design<span className='font-semibold'>bureau</span></p>
                    <p className='font-light text-[12.3px] leading-[19.9px] tracking-[0%] text-[rgba(156,163,175,1)]'>Multidisciplinary studio based in Tbilisi, Georgia. Creating timeless environments and objects since 2004.</p>
                </div>
                <div >
                    <p className='font-cormorant font-light text-[10.5px] leading-3.5 tracking-[2.1px] text-[rgba(107,114,128,1)] uppercase mb-3 md:mb-5.25'>Contact</p>
                    <div className='flex flex-col gap-1.75 font-light text-[12.3px] leading-[17.5px] tracking-[0%]'>
                        <p>info@designbureau.ge</p>
                        <p>+995 32 2 123 456</p>
                        <p>12 Shota Rustaveli Ave, Tbilisi</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='font-cormorant font-light text-[10.5px] leading-3.5 tracking-[2.1px] text-[rgba(107,114,128,1)] uppercase mb-3 md:mb-5.25'>Follow</p>
                    <div className='flex gap-7 font-light text-[12.3px] leading-[17.5px] tracking-[0%]'>
                        <p>Instagram</p>
                        <p>Pinterest</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>

            <div className='border-t border-[rgba(255,255,255,0.1)] pt-7 flex flex-col sm:flex-row gap-8 sm:items-center justify-between font-light text-[10px] leading-3.75 tracking-[1px] text-[rgba(156,163,175,1)]'>
                <p>© 2024 DesignBureau. All rights reserved.</p>
                <p>Co-Founder of Design Georgia</p>
            </div>
        </div>
    </div>
  )
}

export default Footer