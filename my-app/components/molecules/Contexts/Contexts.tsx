import Link from 'next/link'
import React from 'react'

const Contexts = () => {
    return (
        <div className='w-full flex flex-col items-center px-3 sm:px-6 lg:px-16'>
            <div className='w-full max-w-360 flex flex-col gap-6 sm:gap-12'>
                <div className='w-full flex justify-between'>
                    <div>
                        <p className='text-[rgba(156,163,175,1)] uppercase font-normal text-[10.5px] leading-3.5 tracking-[4.2px]'>Selected Work</p>
                        <p className='text-[rgba(26,26,26,1)] font-light text-[clamp(24px,2.5vw,30px)] font-cormorant leading-8.75 tracking-[0%]'>Defining Contexts</p>
                    </div>
                    <Link href='/projects' className='self-end text-[rgba(26,26,26,1)] font-normal text-[10.5px] uppercase leading-3.75 tracking-[1.05px] hover:opacity-50'>See All Projects</Link>
                </div>

                <div className='w-full grid grid-cols-1 sm:grid-cols-2 sm:auto-rows-[clamp(400px,90vh,620px)] gap-5'>

                    <div className='group h-full flex flex-col gap-4 cursor-pointer'>
                        <div className='flex-1 min-h-0 w-full overflow-hidden'>
                            <img
                                src="/high.jpg"
                                alt="Stamba Hotel"
                                className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out'
                            />
                        </div>
                        <div className='flex-none w-full flex items-center justify-between'>
                            <div className=''>
                                <p className='text-[rgba(26,26,26,1)] text-[16px] font-light leading-[20.1px] tracking-[0%] font-cormorant'>Stamba Hotel</p>
                                <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>Interior — Tbilisi, Georgia</p>
                            </div>
                            <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>2018</p>
                        </div>
                    </div>


                    <div className='h-full flex flex-col gap-4 cursor-pointer justify-center'>
                        <div className='group flex flex-col gap-4'>
                            <div className='flex-1 min-h-0 w-full overflow-hidden'>
                                <img
                                    src="/skinfood.svg"
                                    alt="Stamba Hotel"
                                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out'
                                />
                            </div>
                            <div className='flex-none w-full flex items-center justify-between'>
                                <div className=''>
                                    <p className='text-[rgba(26,26,26,1)] text-[16px] font-light leading-[20.1px] tracking-[0%] font-cormorant'>Stamba Hotel</p>
                                    <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>Interior — Tbilisi, Georgia</p>
                                </div>
                                <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>2018</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-full flex flex-col gap-4 cursor-pointer justify-center'>
                        <div className='group flex flex-col gap-4'>
                            <div className='flex-1 min-h-0 w-full overflow-hidden'>
                                <img
                                    src="/skinfood.svg"
                                    alt="Stamba Hotel"
                                    className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out'
                                />
                            </div>
                            <div className='flex-none w-full flex items-center justify-between'>
                                <div className=''>
                                    <p className='text-[rgba(26,26,26,1)] text-[16px] font-light leading-[20.1px] tracking-[0%] font-cormorant'>Stamba Hotel</p>
                                    <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>Interior — Tbilisi, Georgia</p>
                                </div>
                                <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>2018</p>
                            </div>
                        </div>
                    </div>

                    <div className='group h-full flex flex-col gap-4 cursor-pointer'>
                        <div className='flex-1 min-h-0 w-full overflow-hidden'>
                            <img
                                src="/high.jpg"
                                alt="Stamba Hotel"
                                className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out'
                            />
                        </div>
                        <div className='flex-none w-full flex items-center justify-between'>
                            <div className=''>
                                <p className='text-[rgba(26,26,26,1)] text-[16px] font-light leading-[20.1px] tracking-[0%] font-cormorant'>Stamba Hotel</p>
                                <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>Interior — Tbilisi, Georgia</p>
                            </div>
                            <p className='text-[rgba(156,163,175,1)] text-[10px] font-normal leading-[12.3px] tracking-[0.82px]'>2018</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contexts