import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Link from 'next/link'
import Title from '@/components/atoms/Title/Title'
import { ProjectType } from '@/Types/Types'

type MetaItemProps = {
    project: ProjectType;
}

const MetaItem = ({ project }: MetaItemProps) => {
    return (
        <div className='w-full max-w-480 pt-[clamp(60px,12vh,155px)] flex flex-col'>
            <Link href='/projects' className='flex gap-4 items-center'>
                <ArrowLeft size={14} />
                <Subtitle subtitle='back to projects' />
            </Link>

            <div className='my-6 flex flex-col sm:flex-row sm:justify-between gap-6'>
                <div>
                    <h1 className='font-cormorant font-normal sm:font-normal text-[24px] sm:leading-14.5 sm:text-[clamp(2rem,6vh,4rem)] uppercase'>{project.name}</h1>
                    <p className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%]'>{project.subtitle}</p>
                </div>
                <div className='block sm:hidden w-full h-px bg-[#0000005f]'></div>
                <div className='self-center sm:self-end grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 text-[8px] 2xl:text-[12px] tracking-[2.1px] uppercase'>
                    <div>
                        <p className='text-[#949494] font-regular'>category</p>
                        <p className='text-black font-medium mt-1'>{project.category}</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>Location</p>
                        <p className='text-black font-medium mt-1'>{project.location}</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>date</p>
                        <p className='text-black font-medium mt-1'>{project.year}</p>
                    </div>
                    <div>
                        <p className='text-[#949494] font-regular'>program</p>
                        <p className='text-black font-medium mt-1'>{project.program}</p>
                    </div>
                </div>
            </div>

            <div className='block w-full h-px bg-[#0000005f]'></div>

            <div className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[30%] uppercase mt-10 mb-8 sm:mb-20'>
                <p>{project.year}</p>
                <p>{project.status}</p>
                <p>{project.area}m²</p>
                <p>{project.location}</p>
            </div>

            <p className='hidden sm:block font-regular text-[12px] tracking-[3%] mb-4'>{project.description}</p>

            <div className='columns-1 sm:columns-2 gap-5 mb-10 sm:mb-20 '>
                {project.images.map((image) => (
                    <img
                        key={image._id}
                        src={image.url.trim()}
                        alt={project.name}
                        className="w-full mb-5"
                    />
                ))}
            </div>

            <p className='block sm:hidden font-regular text-[12px] tracking-[3%] mb-4'>Located on the 22nd floor of King David Residences in Tbilisi, this apartment was designed as a calm retreat for a frequent traveler. A monochrome palette, curated furniture, and panoramic city views create a refined, hotel-like atmosphere enriched with personal and cultural details.</p>

            <p className='font-regular text-[12px] tracking-[3%]'>
                {project.text}
            </p>
        </div>
    )
}

export default MetaItem