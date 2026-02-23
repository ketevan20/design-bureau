import React from 'react'

type ProjectItemProps = {
    name: string;
    expertise: string;
    location: string;
    image: string;
    year: string;
}
const ProjectItem = ({ name, expertise, location, image, year }: ProjectItemProps) => {
    return (
        <div className='group p-3 bg-white flex flex-col gap-3 h-full overflow-hidden cursor-pointer'>
            <div className='relative overflow-hidden'>
                <img src={image} alt="" loading="lazy" className='aspect-400/267 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out' />
                <button className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out
                    absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-[#ffffff2b] backdrop-blur-sm
                    font-thin text-white text-[14px] leading-[20.1px]
                    px-4 py-2 border border-white uppercase cursor-pointer
                '>view project</button>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-cormorant font-light text-[14px] leading-[20.1px] text-[rgba(26,26,26,1)]'>{name}</p>
                    <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{expertise} — {location}</p>
                </div>
                <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{year}</p>
            </div>
        </div>
    )
}

export default ProjectItem