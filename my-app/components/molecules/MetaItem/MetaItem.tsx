import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Link from 'next/link'
import Title from '@/components/atoms/Title/Title'

const MetaItem = () => {
    return (
        <div className='w-full max-w-480 pt-[clamp(60px,12vh,155px)] flex flex-col'>
            <Link href='/projects' className='flex gap-4 items-center'>
                <ArrowLeft size={14} />
                <Subtitle subtitle='back to projects' />
            </Link>

            <div className='my-6 flex flex-col sm:flex-row sm:justify-between gap-6'>
                <div>
                    <h1 className='font-cormorant font-normal sm:font-normal text-[24px] sm:leading-14.5 sm:text-[clamp(2rem,6vh,4rem)] uppercase'>apartment with cityscape</h1>
                    <p className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%]'>A serene minimalist home with panoramic urban views in Tbilisi</p>
                </div>
                <div className='block sm:hidden w-full h-px bg-[#0000005f]'></div>
                <div className='self-center sm:self-end grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 text-[8px] 2xl:text-[12px] tracking-[2.1px] uppercase'>
                    <div>
                        <p className='text-[#949494] font-regular'>category</p>
                        <p className='text-black font-medium mt-1'>architecture</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>Location</p>
                        <p className='text-black font-medium mt-1'>Tbilisi, georgia</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>category</p>
                        <p className='text-black font-medium mt-1'>2024</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>category</p>
                        <p className='text-black font-medium mt-1'>commercial</p>
                    </div>
                </div>
            </div>

            <div className='block w-full h-px bg-[#0000005f]'></div>
            
            <div className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%] uppercase mt-10 mb-8 sm:mb-20'>
                <p>2024</p>
                <p>completed</p>
                <p>150m²</p>
                <p>tbilisi, georgia</p>
            </div>
            
            <p className='hidden sm:block font-regular text-[12px] tracking-[3%] mb-4'>Located on the 22nd floor of King David Residences in Tbilisi, this apartment was designed as a calm retreat for a frequent traveler. A monochrome palette, curated furniture, and panoramic city views create a refined, hotel-like atmosphere enriched with personal and cultural details.</p>
            
            <div className='columns-1 sm:columns-2 gap-5 mb-10 sm:mb-20 '>
                <img src='/apartment-1.svg' className='w-full mb-5' />
                <img src='/apartment-2.svg' className='w-full mb-5' />
                <img src='/apartment-3.svg' className='w-full mb-5' />
                <img src='/apartment-4.svg' className='w-full mb-5' />
                <img src='/apartment-5.svg' className='w-full mb-5' />
                <img src='/apartment-6.svg' className='w-full mb-5' />
            </div>

            <p className='block sm:hidden font-regular text-[12px] tracking-[3%] mb-4'>Located on the 22nd floor of King David Residences in Tbilisi, this apartment was designed as a calm retreat for a frequent traveler. A monochrome palette, curated furniture, and panoramic city views create a refined, hotel-like atmosphere enriched with personal and cultural details.</p>

            <p className='font-regular text-[12px] tracking-[3%]'>
                This captivating apartment is on the 22th floor of King David Residences, an iconic tower that graces the center of Tbilisi, Georgia. It stands as one of the city’s tallest landmarks. This residence serves as a serene retreat for its owner, a frequent visitor to Tbilisi for work. Inspired by the owner’s transient lifestyle, the design captures the sleek aesthetics of a hotel room while introducing elements that impart a comforting sense of coziness.
                <br /><br />
                The primary focus of this design venture was to create an inviting interior with a pristine aesthetic, enriched by captivating details that cater to both guests and the owner during moments of personal reflection. The apartment’s extensive windows frame a breathtaking view of Tbilisi, establishing a dynamic ambiance that evolves with the changing natural light. Thoughtfully placed blinds allow residents to control the modulation of light intensity, creating an immersive and personalized ambiance.
                <br /><br />
                Furniture takes center stage in crafting a visually striking narrative, featuring a carefully curated selection of iconic pieces seamlessly integrated with Marble Domino tables (design by Madam Bozarjiants), showcasing a lucky number significant to the owner. An asymmetric rug (designed by Madam Bozarjiants), inspired by the works of Georgian artist Vera Pagava, injects an artistic dimension into the living space, infusing a touch of cultural richness into the contemporary design.
            </p>
        </div>
    )
}

export default MetaItem