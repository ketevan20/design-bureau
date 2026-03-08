import React from 'react'
import Button from '../Button/Button';

type ProjectItemProps = {
    name: string;
    expertise: string;
    location: string;
    image: string;
    year: number;
}
const ProjectItem = ({ name, expertise, location, image, year }: ProjectItemProps) => {
    return (
        <div className='group p-3 bg-white flex flex-col gap-3 h-full overflow-hidden cursor-pointer'>
            <div className='relative overflow-hidden'>
                <img src={image} alt="" className='aspect-400/267 w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 origin-center transition-all duration-1000 ease-out' />
                <Button />
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-cormorant font-light text-[14px] leading-[20.1px] text-[rgba(26,26,26,1)]'>{name}</p>
                    <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{expertise === 'product-design' ? 'Product Design' : expertise} — {location}</p>
                </div>
                <p className='font-light text-[8px] leading-[12.3px] text-[rgba(156,163,175,1)] uppercase'>{year}</p>
            </div>
        </div>
    )
}

export default ProjectItem